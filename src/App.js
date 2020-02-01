import React from 'react';
import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo'
import './resources/styles.css';
function App() {
  return (
    <div className="App" style={{
      height:'1500px',
      background:'cornflowerblue'
    }}>
      <Header />
      <Featured />
      <VenueInfo />
    </div>
  );
}

export default App;
