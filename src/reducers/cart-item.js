import { cartItemConstants } from '../constants';

export function products(state = {}, action) {
  switch (action.type) {
    case cartItemConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case cartItemConstants.GETALL_SUCCESS:
      return {
        items: action.products
      };
    case cartItemConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}