/* eslint-disable @typescript-eslint/no-empty-interface */
import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable, { Record } from 'immutable';
import { ProductsStateRecord } from './ducks/products/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

interface ApplicationStateRecord {
  products: ProductsStateRecord;
}

export interface ApplicationState extends Record<ApplicationStateRecord> {}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: {
          immutable: Immutable,
        },
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store: Store<ApplicationState> = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
