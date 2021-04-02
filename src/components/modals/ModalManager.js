import React from 'react';
import { connect } from 'react-redux';
import AuthentificationtModal from './AuthentificationModal';
import AddEditProductModal from './AddEditProductModal';
import DeleteProductModal from './DeleteProductModal';

const MODAL_COMPONENTS = {
  'AUTHENTICATE': AuthentificationtModal,
  'ADD_EDIT_PRODUCT': AddEditProductModal,
  'DELETE_PRODUCT': DeleteProductModal
}

const ModalManager = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null; 
  }

  const ModalComponent = MODAL_COMPONENTS[modalType];

  return <ModalComponent {...modalProps}/>
}

const mapStateToProps = (state) => {
    const { modalType, modalProps } = state.modal 
    return {
        modalType,
        modalProps
    }
}

export default connect(mapStateToProps)(ModalManager)