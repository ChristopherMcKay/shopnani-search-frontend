import React, { Component } from 'react';
import Logo from './Components/Logo';
import Search from './Components/Search';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Logo />
        <Search />
      </div>
    );
  }
}

export default App;
