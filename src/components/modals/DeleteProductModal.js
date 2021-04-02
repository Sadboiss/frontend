import React from 'react';
import { connect } from 'react-redux';
import { modalActions, productActions } from '../../actions';
import { Modal, Paper } from '@material-ui/core';

const DeleteProductModal = (props) => {
    const paperStyle = {
        padding: 20,
        height: 'auto',
        width: 600,
        margin: '20px auto'
    }
    return (
        <Modal
            open={props.modalProps.open}
            onClose={props.close}
            aria-labelledby="modal-title"
            aria-describedby="simple-modal-description"
        >
            <>

                <Paper elevation={10} style={paperStyle}>
                    <h2 id="modal-title">
                        Removing product
                    </h2>
                    <p id="modal-description">
                        Are you sure?
                    </p>
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
        removeProduct: (product) => dispatch(productActions.remove(product)),
        close: () => dispatch(modalActions.close())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProductModal);