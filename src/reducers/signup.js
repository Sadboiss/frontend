import { userConstants } from '../constants';

export function signup(state = {}, action) {
  switch (action.type) {
    case userConstants.SINGUP_REQUEST:
      return {
        creating: true,
      };
    case userConstants.SIGNUP_SUCCESS:
      return {
        created: true,
        user: action.user
      };
    case userConstants.SIGNUP_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}