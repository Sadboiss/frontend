import { modalConstants } from '../constants';

const open = (modalType) => {
    return dispatch => {
        dispatch({ type: modalConstants.SHOW_MODAL, modalType })
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