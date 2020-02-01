import React from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/Highlights';
import './resources/styles.css';
function App() {
  return (
    <div className="App" style={{
      height:'1500px'
    }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
    </div>
  );
}

export default App;
