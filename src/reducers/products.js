import { productConstants } from '../constants';

export function products(state = {}, action) {
  switch (action.type) {
    case productConstants.GETALL_REQUEST:
      return { loaded: false };
    case productConstants.GETALL_SUCCESS:
      return { ...state, products: action.payload, loaded: true };
    case productConstants.GETALL_FAILURE:
      return { error: action.error };

    case productConstants.ADD_REQUEST:
      return { ...state, added: false };
    case productConstants.ADD_SUCCESS:
      return { ...state, added: action.payload };
    case productConstants.ADD_FAILURE:
      return { error: action.error };
      
    case productConstants.UPDATE_REQUEST:
      return { ...state, updated: false };
    case productConstants.UPDATE_SUCCESS:
      return { ...state, updated: action.payload,};
    case productConstants.UPDATE_FAILURE:
      return { error: action.error };
      
    case productConstants.REMOVE_REQUEST:
      return { ...state, removed: false };
    case productConstants.REMOVE_SUCCESS:
      return { ...state, removed: true };
    case productConstants.REMOVE_FAILURE:
      return { error: action.error };
    default:
      return state
  }
}