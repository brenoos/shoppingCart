import { combineReducers } from 'redux-immutable';

import products from './products';
import cart from './cart';

export default combineReducers({
  products,
  cart,
});
