import { categoryConstants } from '../constants';

export function categories(state = {}, action) {
  switch (action.type) {
    case categoryConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case categoryConstants.GETALL_SUCCESS:
      console.log(action)
      return {
        loaded: true,
        categories: action.payload
      };
    case categoryConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}