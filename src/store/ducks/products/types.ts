/* eslint-disable @typescript-eslint/no-empty-interface */
import { Record, List } from 'immutable';

export enum ProductsTypes {
  LOAD_REQUEST = '@products/LOAD_REQUEST',
  LOAD_SUCCESS = '@products/LOAD_SUCCESS',
  LOAD_FAILURE = '@products/LOAD_FAILURE',
  INCREMENT_PRODUCT = '@products/INCREMENT_PRODUCT',
  DECREMENT_PRODUCT = '@products/DECREMENT_PRODUCT',
}

export interface Product {
  id: string;
  title: string;
  price: number;
  picture: string;
  description: string;
  memory: string;
  brand: string;
  chipType: string;
  quantity: number;
}

export interface ProductsRecord extends Record<Product> {}

export interface ProductsState {
  readonly data: List<Product>;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface ProductsStateRecord extends Record<ProductsState> {}
