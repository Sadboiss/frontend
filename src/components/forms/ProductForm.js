import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Fab from "@material-ui/core/Fab";
import Utils from '../../utilities/utils';
import { productActions } from '../../actions';
import { FormControl, InputLabel, Input, Button, Select, MenuItem, Grid } from '@material-ui/core';

const ProductForm = (props) => {

    const [mode, setMode] = useState('Add');
    const [id, setId] = useState();
    const [name, setName] = useState("a");
    const [description, setDescription] = useState("a");
    const [price, setPrice] = useState(2.00);
    const [categoryId, setCategoryId] = useState(1);
    const [display, setDisplay] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [defaultImageSrc] = useState('https://react.semantic-ui.com/images/wireframe/image.png')
    const [imageSrcs, setImageSrcs] = useState([]);

    const buttonStyle = {
        width: 150,
        margin: '20px 0'
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column'
        },
        margin: {
            margin: theme.spacing(1),
        },
        input: {
            display: "none"
        },
        image: {
            width: 50,
            height: 50
        }
    }));

    const classes = useStyles();
    useEffect(() => {
        if (!props.selectedProduct)
            return;
        setMode('Edit');
        setFields(props.selectedProduct);
    }, [])



    const setFields = (product) => {
        setId(product.id);
        setCategoryId(defaultValue())
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setDisplay(product.display);
        setImageSrcs(`data:image/jpeg;base64,${product.image}`)
    }

    const defaultValue = () => {
        let { selectedProduct } = props;
        if (selectedProduct)
            return selectedProduct.category.id;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price || !categoryId)
            return;

        let data = new FormData();
        if (mode === 'Edit')
            data.append("Id", id)
        data.append("Name", name);
        data.append("Description", description);
        data.append("Price", price);
        data.append("Image", null);
        data.append("Display", display);
        data.append("CategoryId", props.categories.find(x => x.id === categoryId).id);
        
        const filesArr = Object.values(fileList[0]);
        for(let i = 0; i < filesArr.length; i++) {
            data.append("fileList", filesArr[i]);
        }
        props.addOrUpdate(data);
    }

    const previewFiles = (e) => {
        var preview = document.querySelector('#preview')
        var files = e.target.files;
        setFileList([...fileList, files]);
        function readAndPreview(file) {
            if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                const reader = new FileReader();
                reader.onload = x => {
                    var image = new Image();
                    image.title = file.name;
                    image.width = 100;
                    image.height = 50;
                    image.src = x.target.result;
                    preview.appendChild(image);
                }
                reader.readAsDataURL(file);
            }
        }
        if (files) {
            [].forEach.call(files, readAndPreview);
        }
    }

    const isErrored = () => {
        let expression = /^\d*\.?\d+$/;
        if (!expression.test(price))
            return true
        return false;
    }

    return (
        <div className={classes.root}>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="pName">Product Name</InputLabel>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="price">Price</InputLabel>
                <Input id="price" error={isErrored()} value={price} onChange={(e) => setPrice(e.target.value)} />
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="description">Description</InputLabel>
                <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    {props.categories ?
                        props.categories.map((category) => {
                            return <MenuItem key={category.name} value={category.id}>{category.name}</MenuItem>
                        })
                        :
                        null
                    }
                </Select>
            </FormControl>
            <FormControl className={classes.margin}>
                <input
                    accept="image/*"
                    name="fileList"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={(e) => previewFiles(e)}
                />
                <label htmlFor="contained-button-file">
                    <Fab component="span" className={classes.button}>
                        <AddPhotoAlternateIcon />
                    </Fab>
                </label>
            </FormControl>
            <Grid id="preview" className={classes.margin}>

            </Grid>
            <FormControl className={classes.margin}>
                <Button variant="contained" type="submit" style={buttonStyle} onClick={(e) => handleSubmit(e)}>{mode}</Button>
            </FormControl>

        </div>
    )
}

const mapStateToProps = (state) => {
    const { selectedProduct } = state.modal.modalProps
    const { categories } = state.categories;
    const { sizes } = state.sizes;
    return {
        selectedProduct,
        categories,
        sizes
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOrUpdate: (product) => dispatch(productActions.addOrUpdate(product))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);