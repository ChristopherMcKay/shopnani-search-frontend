import React, { Component } from 'react';
import Logo from './Components/Logo';
import Search from './Components/Search';
import ProductList from './Components/ProductList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Logo />
        <Search />
        <ProductList />
      </div>
    );
  }
}

export default App;
