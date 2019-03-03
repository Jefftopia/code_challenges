import React, { Component } from 'react';

import Product from './Components/Product';
import Reviews from './Components/Reviews';
import Header from './Components/Header';
import Footer from  './Components/Footer';

import { HashRouter, Route } from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';

import './styles.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
            >
              <Route exact path="/" component={Product} />
              <Route exact path="/reviews" component={Reviews} />
            </AnimatedSwitch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
