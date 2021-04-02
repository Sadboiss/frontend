import { modalConstants } from '../constants';

const initialState = {
  modalType: null,
  modalProps: {
    open: false
  }
}

export function modal(state = initialState, action) {
  switch (action.type) {
    case modalConstants.SHOW_MODAL:
      return {
        ...state,
        modalType: action.modalType,
        modalProps: action.modalProps
      }

    case modalConstants.HIDE_MODAL:
      return initialState

    default:
      return state
  }
}