import React, { useState } from "react";
import { Modal, Icon } from 'semantic-ui-react'
import ProductForm from './ProductForm';

const EditProductModal = (props) => {

    const [open, setOpen] = useState(false);

    const trigger = () => {
        return (
            <a>
                <Icon size="big" name='edit' />
            </a>
        )
    }

    return (
        <Modal
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            trigger={trigger()}
        >
            <ProductForm product={props.product}/>
        </Modal>
    );
}

export default EditProductModal;