import { cartConstants } from '../constants';

export function carts(state = {}, action) {
  switch (action.type) {
    case cartConstants.GET_ITEMS_REQUEST:
      return {
        loading: true
      };
    case cartConstants.GET_ITEMS_SUCCESS:
      return {
        cart: action.cart
      };
    case cartConstants.GET_ITEMS_FAILURE:
      return {
        error: action.error
      };
    case cartConstants.ADD_REQUEST:
      return {
        addingToCart: true
      };
    case cartConstants.ADD_SUCCESS:
      return {
        addedToCart: true,
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