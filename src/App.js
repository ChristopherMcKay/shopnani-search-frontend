import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import SearchPage from './Components/SearchPage';
import SearchResults from './Components/SearchResults';

import About from './Components/About';
import HowSearchWorks from './Components/HowSearchWorks';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';

import Footer from './Components/Footer';


import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

          <Route exact path="/" component={SearchPage} />

          <Route exact path="/search" component={SearchResults} />  

          <Route exact path="/about" component={About} />

          <Route exact path="/search-description" component={HowSearchWorks} />  

          <Route exact path="/privacy-policy" component={Privacy} />  

          <Route exact path="/terms-and-conditions" component={Terms} />  

          <Footer />
      </div>
    );
  }
}

export default App;
