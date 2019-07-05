/* eslint-disable @typescript-eslint/no-empty-interface */
import { createStore, applyMiddleware, Store, compose } from 'redux';
import Immutable, { Record } from 'immutable';
import thunk from 'redux-thunk';
import { ProductsStateRecord } from './ducks/products/types';
import rootReducer from './ducks/rootReducer';
import api from '../services/api';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

interface ApplicationStateRecord {
  products: ProductsStateRecord;
}

export interface ApplicationState extends Record<ApplicationStateRecord> {}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: {
          immutable: Immutable,
        },
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument({ api }))
);

const store: Store<ApplicationState> = createStore(rootReducer, enhancer);

export default store;
