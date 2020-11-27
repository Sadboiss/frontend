import React, { useState } from "react";
import { Modal, Button, Icon, Header } from 'semantic-ui-react';
import { productActions } from '../../../actions';
import { connect } from 'react-redux';

const RemoveProductModal = (props) => {
    const [open, setOpen] = useState(false);


    const handleRemove = () => {
        if(props.product)
            props.removeProduct(props.product);
    }

    const trigger = () => {
        return (
            <a>
                <Icon color="red" size="big" name='delete' />
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
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                <p>
                    Your inbox is getting full, would you like us to enable automatic
                    archiving of old messages?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green'  onClick={() => handleRemove()}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeProduct: (product) => dispatch(productActions.remove(product)),
	}
};

export default connect(null, mapDispatchToProps)(RemoveProductModal);