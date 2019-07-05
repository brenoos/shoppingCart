import { action } from 'typesafe-actions';
import { Dispatch, Action, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CartTypes } from './types';
import { Product, ProductsTypes } from '../products/types';
import { getCartData, getCart } from './selectors';
import { getProduct } from '../products/selectors';
import { ApplicationState } from '../..';

export const incrementItem = (id: string) => (
  dispatch: ThunkDispatch<ApplicationState, Record<string, any>, AnyAction>,
  getState: Function
) => {
  const product = getProduct(getState(), id);
  const cartItem = getCart(getState(), id);
  console.log(product);
  if (product.quantity > 0) {
    dispatch(action(CartTypes.INCREMENT_ITEM, { cartItem }));
    dispatch(action(ProductsTypes.DECREMENT_PRODUCT, { product }));
  }
};

export const addItem = (product: Product) => (
  dispatch: ThunkDispatch<ApplicationState, Record<string, any>, AnyAction>,
  getState: Function
) => {
  const cart = getCartData(getState());

  const findProduct = cart.find((item: Product) => item.id === product.id);

  return findProduct
    ? dispatch(incrementItem(product.id))
    : dispatch(action(CartTypes.ADD_ITEM, product));
};
