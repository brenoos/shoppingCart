import memoize from 'fast-memoize';
import { ApplicationState } from '../..';
import { Product } from './types';

const getRepositoriesSlow = (state: ApplicationState) =>
  state.getIn(['products', 'data']).toJS();

export const getProductsData = memoize(getRepositoriesSlow);

export const getProduct = (state: ApplicationState, id: string): Product => {
  const products = getProductsData(state);

  return products.find((product: Product) => product.id === id);
};
