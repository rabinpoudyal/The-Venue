import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import './resources/styles.css';
import Featured from './components/featured';
import VenueInfo from './components/venue_info';
import Highlights from './components/highlights';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
