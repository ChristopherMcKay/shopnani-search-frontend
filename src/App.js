import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import SearchPage from './Components/SearchPage';
import SearchResults from './Components/SearchResults';
import Footer from './Components/Footer';


import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

          <Route exact path="/" component={SearchPage} />

          <Route path="/search" component={SearchResults} />     
          <Footer />
            
      </div>
    );
  }
}

export default App;
