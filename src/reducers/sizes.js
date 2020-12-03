import { sizeConstants } from '../constants';

export function sizes(state = {}, action) {
  switch (action.type) {
    case sizeConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case sizeConstants.GETALL_SUCCESS:
      return {
        loaded: true,
        sizes: action.payload
      };
    case sizeConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}