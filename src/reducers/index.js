import { combineReducers } from 'redux';

import { signup } from './signup';
import { authentication } from './authentication';
import { users } from './users';
import { products } from './products';
import { cartitems } from './cart-item';

const rootReducer = combineReducers({
  authentication,
  signup,
  users,
  products,
  cartitems
});

export default rootReducer;