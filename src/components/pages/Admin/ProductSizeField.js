import React, { useState } from "react";
import { Form, Input } from 'semantic-ui-react';
import './ProductSizeField.scss';

const ProductSizeField = (props) => {
    const [stock, setStock] = useState(0);

    const handleChange = (e) => {
        setStock(e.target.value)
        let { list, size } = props
        let found = list.find(s => s.sizeId === size.id)

        if(found)
            found.inStock = e.target.value    
        else 
            list.push({
                sizeId: props.size.id,
                inStock: e.target.value || 0
            })  
    }

    return (
        <div className="psf-wrapper">
            <p className="psf-label">{props.size.name}</p>
            <Form.Field
                control={Input}
                value={stock}
                onChange={(e) => handleChange(e)}
                placeholder='Enter in stock value'
            />
        </div>
    )
}

export default ProductSizeField;