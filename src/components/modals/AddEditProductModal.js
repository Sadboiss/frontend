import React from 'react';
import { connect } from 'react-redux';
import { modalActions } from '../../actions';
import { Modal, Paper } from '@material-ui/core';
import ProductForm from '../forms/ProductForm';

const AddEditProductModal = (props) => {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 600,
        margin: '20px auto'
    }

    return (
        <Modal
            open={props.modalProps.open}
            onClose={props.close}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <>
                <Paper elevation={10} style={paperStyle}>
                    <ProductForm />
                </Paper>
            </>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    const { modalProps } = state.modal;
    return {
        modalProps
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => dispatch(modalActions.close())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditProductModal);