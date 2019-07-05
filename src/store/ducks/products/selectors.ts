import memoize from 'fast-memoize';
import { ApplicationState } from '../..';
import { Product } from './types';

export const getProductsData = (state: ApplicationState) =>
  state.getIn(['products', 'data']).toJS();

export const getProduct = (state: ApplicationState, id: string): Product => {
  const products = getProductsData(state);

  return products.find((product: Product) => product.id === id);
};
