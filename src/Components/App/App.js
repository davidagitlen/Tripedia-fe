import React from 'react';
import './App.scss';
import Map from '../Map/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Look, it's a React app!
        </p>
      </header>
      <div className='map-container'>
        <Map 
          center={{ lat: 39.7392, lng: -104.9903 }}
          zoom={11}
      />
      </div>
    </div>
  );
}

export default App;