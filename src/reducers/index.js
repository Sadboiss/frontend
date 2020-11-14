import { combineReducers } from 'redux';

import { accountCreation } from './account-creation';
import { authentication } from './authentication';
import { users } from './users';

const rootReducer = combineReducers({
  authentication,
  accountCreation,
  users
});

export default rootReducer;