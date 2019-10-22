import React from 'react';
import Navigation from '../Navigation/Navigation';
import FormsContainer from '../FormsContainer/FormsContainer';
import './App.scss';
import Map from '../Map/Map';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='map-form__container'>
        <FormsContainer />
        <div className='map-container'>
          <Map 
            center={{ lat: 39.7392, lng: -104.9903 }}
            zoom={11}
          />
        </div>
      </div>
    </div>
  );
}

export default App;