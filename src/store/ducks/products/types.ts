/* eslint-disable @typescript-eslint/no-empty-interface */
import { Record } from 'immutable';

export enum ProductsTypes {
  LOAD_REQUEST = '@products/LOAD_REQUEST',
  LOAD_SUCCESS = '@products/LOAD_SUCCESS',
  LOAD_FAILURE = '@products/LOAD_FAILURE',
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
  readonly data: Product[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface ProductsStateRecord extends Record<ProductsState> {}
