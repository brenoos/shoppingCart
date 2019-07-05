/* eslint-disable @typescript-eslint/no-empty-interface */
import { Record, List } from 'immutable';

export enum CartTypes {
  ADD_ITEM = '@cart/ADD_ITEM',
  CHECK_ITEM = '@cart/CHECK_ITEM',
  REMOVE_ITEM = '@cart/REMOVE_ITEM',
  INCREMENT_ITEM = '@cart/INCREMENT_ITEM',
  DECREMENT_ITEM = '@cart/DECREMENT_ITEM',
}

export interface ProductOnCart {
  id: string;
  title: string;
  price: number;
  quantity: any;
}

export interface ProductOnCartRecord extends Record<ProductOnCart> {}

export interface CartState {
  readonly data: List<ProductOnCart>;
}

export interface CartStateRecord extends Record<CartState> {}
