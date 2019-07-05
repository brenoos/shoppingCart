import React from 'react';
import Header from './components/commom/Header';
import './App.css';
import ProductsList from './components/commom/Products/ProductsList';

const App: React.FC = () => (
  <>
    <Header />
    <ProductsList />
  </>
);
export default App;
