import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { ProductsTypes, Product } from './types';

export const loadSuccess = (data: Product[]) =>
  action(ProductsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(ProductsTypes.LOAD_FAILURE);

export const load = () => async (
  dispatch: Dispatch,
  getState: Function,
  { api }: Record<string, any>
) => {
  try {
    const response = await api.get('products');

    dispatch(loadSuccess(response.data));
  } catch (err) {
    dispatch(loadFailure());
  }
};
