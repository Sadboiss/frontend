import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Image, Input, TextArea, Select, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { productActions } from '../../../actions';

const ProductForm = (props) => {

    const [mode, setMode] = useState('Add');
    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0.00);
    const [category, setCategory] = useState();
    const [display, setDisplay] = useState(false);
    const [file, setFile] = useState(null);
    const [img, setImg] = useState(null);
    const [imgSrc, setImgSrc] = useState('https://react.semantic-ui.com/images/wireframe/image.png');

    useEffect(() => {
        if (!props.product)
            return;

        setMode('Edit');
        setFields(props.product);

    }, [])

    const setFields = (product) => {
        setId(product.id);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setDisplay(product.display);
        setImg(product.image);
        setImgSrc(`data:image/jpeg;base64,${product.image}`)
    }

    const options = () => {
        let { categories, product } = props;
        if(categories) {
           return categories.map(category => {
                return ( 
                    { 
                        key: category.id,
                        text: category.name,
                        value: category.name
                    }
                )
            })
        }
        return [];
    }

    const defaultValue = () => {
        let { product } = props;
        if(product)
            return product.category.name;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !price || !category)
            return;
                
        let data = new FormData();
        if(mode === 'Edit')
            data.append("Id", id)

        data.append("Name", name);
        data.append("Description", description);
        data.append("Price", price)
        data.append("File", file);
        data.append("Display", display)
        data.append("Image", img);
        data.append("CategoryId", props.categories.find(x => x.name === category).id);

        props.addOrUpdate(data)
    }

    const preview = (e) => {
        if (e.target.files && e.target.files[0]) {
            let obj = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setFile(obj);
                setImgSrc(x.target.result);
            };
            reader.readAsDataURL(obj);
        }
    }

    const validatePrice = () => {
        let expression = /^\d*\.?\d+$/;
        if (!expression.test(price))
            return {
                content: 'Please enter a valid price',
                pointing: 'below',
            }
        return false;
    }

    return (
        <>
            <Modal.Header>{mode} product</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field
                        id='form-input-name'
                        control={Input}
                        label='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Product Name'
                    />
                    <Form.Field
                        id='form-input-price'
                        control={Input}
                        label='Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Product price'
                        error={validatePrice()}
                    />
                    <Form.Field
                        id='form-input-description'
                        control={TextArea}
                        label='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Product Description'
                    />
                    <Form.Field
                        control={Select}
                        options={options()}
                        label={{ children: 'Category', htmlFor: 'form-select-control-category' }}
                        placeholder='Category'
                        onChange={(e, { value }) => setCategory(value)}
                        search
                        defaultValue={defaultValue()}
                        searchInput={{ id: 'form-select-control-category' }}
                    />
                    <Form.Field>
                        <label>Upload your image</label>
                        <Input type="file" accept="image/*" onChange={(e) => preview(e)} />
                    </Form.Field>
                    <Image src={imgSrc} size='small' wrapped />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' type="submit" onClick={(e) => handleSubmit(e)}>{mode}</Button>
            </Modal.Actions>
        </>
    );
}

const mapStateToProps = (state) => {
    const { categories } = state.categories;
    return {
        categories
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOrUpdate: (product) => dispatch(productActions.addOrUpdate(product))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);