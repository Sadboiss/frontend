import React, { useState } from "react";
import { Modal, Button } from 'semantic-ui-react'
import ProductForm from './ProductForm';
import './AddProductModal.scss';


const AddProductModal = (props) => {

    const [open, setOpen] = useState(false);

    const trigger = () => {
        return (
            <Button
                className='add-product-btn'
                circular
                icon='add'
                primary
                size='huge'
            >
            </Button>
        )
    }

    return (
        <Modal
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            trigger={trigger()}
        >
            <ProductForm />
        </Modal>
    );
}

export default AddProductModal;