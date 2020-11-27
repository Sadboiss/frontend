import { productConstants } from '../constants';

export function products(state = {}, action) {
  switch (action.type) {
    case productConstants.GETALL_REQUEST:
      return { loading: true };
    case productConstants.GETALL_SUCCESS:
      return { loaded: true, products: action.payload };
    case productConstants.GETALL_FAILURE:
      return { error: action.error };

    case productConstants.ADD_REQUEST:
      return { adding: true };
    case productConstants.ADD_SUCCESS:
      return { added: true };
    case productConstants.ADD_FAILURE:
      return { error: action.error };
      
    case productConstants.UPDATE_REQUEST:
      return { updated: false, ...state };
    case productConstants.UPDATE_SUCCESS:
      console.log(action.payload)
      return { updated: action.payload, ...state };
    case productConstants.UPDATE_FAILURE:
      return { error: action.error };
      
    case productConstants.REMOVE_REQUEST:
      return { removing: true };
    case productConstants.REMOVE_SUCCESS:
      return { removed: true };
    case productConstants.REMOVE_FAILURE:
      return { error: action.error };
    default:
      return state
  }
}