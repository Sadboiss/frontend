import { modalConstants } from '../constants';

const open = (modalType, modalProps) => {
    
    modalProps = modalProps ? Object.assign(modalProps, { open: true }) : { open: true };
    return dispatch => {
        dispatch({ 
            type: modalConstants.SHOW_MODAL, 
            modalType,
            modalProps
        })
    }
}

const close = () => {
    return dispatch => {
        dispatch({ type: modalConstants.HIDE_MODAL })
    }
}
export const modalActions = {
    open,
    close
}