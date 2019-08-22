import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from './Components/Search';
import ProductList from './Components/ProductList';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default App;
