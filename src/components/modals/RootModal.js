import React from 'react';
import { connect } from 'react-redux';
import AuthentificationtModal from './AuthentificationtModal';

const MODAL_COMPONENTS = {
  'AUTHENTIFICATION': AuthentificationtModal
  /* other modals */
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null; // after React v15 you can return null here
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  return <SpecificModal {...modalProps} />
}

const mapStateToProps = (state) => {
    const { modalType } = state.modal 
    return {
        modalType
    }
}

export default connect(mapStateToProps)(ModalRoot)