import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Product from './Components/Product';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default App;
