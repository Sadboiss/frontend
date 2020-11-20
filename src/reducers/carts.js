import { cartConstants } from '../constants';

export function carts(state = {}, action) {
  switch (action.type) {
    case cartConstants.GET_ITEMS_REQUEST:
      return {
        loading: true
      };
    case cartConstants.GET_ITEMS_SUCCESS:
      return {
        item: action.item
      };
    case cartConstants.GET_ITEMS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}