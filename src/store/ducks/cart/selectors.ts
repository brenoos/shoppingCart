import memoize from 'fast-memoize';
import { ApplicationState } from '../..';
import { Product } from '../products/types';

const getCartSlow = (state: ApplicationState) =>
  state.getIn(['cart', 'data']).toJS();

export const getCartData = memoize(getCartSlow);

export const getCart = (state: ApplicationState, id: string): Product => {
  const cart = getCartData(state);

  return cart.find((product: Product) => product.id === id);
};
