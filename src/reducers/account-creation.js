import { userConstants } from '../constants';

export function accountCreation(state = {}, action) {
  switch (action.type) {
    case userConstants.SINGUP_REQUEST:
      return {
        accountCreation: true,
      };
    case userConstants.SIGNUP_SUCCESS:
      return {
        accountCreated: true,
        user: action.user
      };
    case userConstants.SIGNUP_FAILURE:
      return {};
    default:
      return state
  }
}