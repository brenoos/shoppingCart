import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { CartTypes } from './types';
import { Product } from '../products/types';

export const addItem = (product: Product) => (
  dispatch: Dispatch,
  getState: any
) => {
  console.log(getState());
  dispatch(action(CartTypes.ADD_ITEM, product));
};
