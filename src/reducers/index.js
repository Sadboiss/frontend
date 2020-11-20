import { combineReducers } from 'redux';

import { signup } from './signup';
import { authentication } from './authentication';
import { users } from './users';
import { products } from './products';
import { carts } from './carts';

const rootReducer = combineReducers({
  authentication,
  signup,
  users,
  products,
  carts
});

export default rootReducer;