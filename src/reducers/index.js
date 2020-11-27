import { combineReducers } from 'redux';
import { signup } from './signup';
import { authentication } from './authentication';
import { users } from './users';
import { products } from './products';
import { carts } from './carts';
import { categories } from './categories';

const rootReducer = combineReducers({
  authentication,
  signup,
  users,
  products,
  carts,
  categories
});

export default rootReducer;