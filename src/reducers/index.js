import { combineReducers } from 'redux';

import { signup } from './signup';
import { authentication } from './authentication';
import { users } from './users';

const rootReducer = combineReducers({
  authentication,
  signup,
  users
});

export default rootReducer;