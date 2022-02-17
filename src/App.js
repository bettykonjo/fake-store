import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import ProductsPage from './Components/product/ProductsPage';

function App() {
  return (
    <div className="App">
          <Nav />
          <ProductsPage/>
    </div>
  );
}

export default App;
