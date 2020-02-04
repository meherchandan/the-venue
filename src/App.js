import React from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/header_footer/Footer';
import {Element} from 'react-scroll'; 
import './resources/styles.css';
function App() {
  return (
    <div className="App" style={{
      height:'1500px'
    }}>
      <Header />
      <Element name="feature">
        <Featured />
      </Element>
      <Element name="venue">
      <VenueInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
