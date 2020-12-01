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
                <Icon color="red" size="big" name='trash' />
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
            <Header icon='trash' content='Delete Product' />
            <Modal.Content>
                <p>
                    Are you sure you want to remove this product? You can always choose to not display it instead.
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='black'  onClick={() => handleRemove()}>
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