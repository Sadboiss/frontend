import { cartConstants } from '../constants';

export function carts(state = {}, action) {
  switch (action.type) {
    case cartConstants.GET_ITEMS_REQUEST:
      return {
        loaded: false
      };
    case cartConstants.GET_ITEMS_SUCCESS:
      return {
        ...state,
        loaded: true,
        cart: action.payload
      };
    case cartConstants.GET_ITEMS_FAILURE:
      return {
        error: action.error
      };
    case cartConstants.ADD_REQUEST:
      return {
        ...state,
        added: false
      };
    case cartConstants.ADD_SUCCESS:
      return {
        ...state,
        added: true,
      };
    case cartConstants.ADD_FAILURE:
      return {
        addedToCart: false,
        error: action.error
      };

    default:
      return state
  }
}