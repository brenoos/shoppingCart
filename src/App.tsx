import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/commom/Header';
import './App.css';
import ProductsList from './components/pages/ProductsList';

import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <Header />
    <ProductsList />
  </Provider>
);
export default App;
