import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { layoutGenerator } from 'react-break';

import SearchPage from './Components/SearchPage';
import SearchResults from './Components/SearchResults';

import About from './Components/About';
import HowSearchWorks from './Components/HowSearchWorks';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Profile from './Components/Profile';
import Footer from './Components/Footer';

import MobSearchPage from './Components/mobile/MobSearchPage';
import MobSearchResults from './Components/mobile/MobSearchResults';
import MobHowSearchWorks from './Components/mobile/MobHowSearchWorks';
import MobProfile from './Components/mobile/MobProfile';

import { pageLoad } from './redux/actions/userAuthAction';

import { connect } from 'react-redux';

import './App.css';

const layout = layoutGenerator({
  mobile: 0,
  tablet: 650,
  desktop: 1050,
});
 
const OnMobile = layout.is('mobile');
const OnAtLeastTablet = layout.is('tablet');
const OnDesktop = layout.is('desktop');

class App extends Component {


  render() {
    return (
      <div className="App">

        <OnMobile>
          <Route exact path="/" component={MobSearchPage} />
          <Route exact path="/search" component={MobSearchResults} />  
          <Route exact path="/about" component={About} />
          <Route exact path="/search-description" component={MobHowSearchWorks} />  
          <Route exact path="/privacy-policy" component={Privacy} />  
          <Route exact path="/terms-and-conditions" component={Terms} /> 
          <Route exact path="/profile" component={MobProfile} />  
          <Footer />
        </OnMobile>

        <OnAtLeastTablet>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/search" component={SearchResults} />  
          <Route exact path="/about" component={About} />
          <Route exact path="/search-description" component={HowSearchWorks} />  
          <Route exact path="/privacy-policy" component={Privacy} />  
          <Route exact path="/terms-and-conditions" component={Terms} />  
          <Route exact path="/profile" component={Profile} />  
          <Footer />
        </OnAtLeastTablet>


        <OnDesktop>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/search" component={SearchResults} />  
          <Route exact path="/about" component={About} />
          <Route exact path="/search-description" component={HowSearchWorks} />  
          <Route exact path="/privacy-policy" component={Privacy} />  
          <Route exact path="/terms-and-conditions" component={Terms} />  
          <Route exact path="/profile" component={Profile} />  
          <Footer />
        </OnDesktop>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    authUser: store.user
  }
}

export default connect(mapStateToProps, { pageLoad })(App);
