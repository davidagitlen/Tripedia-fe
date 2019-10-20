import React from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin/Pin';
import './Map.scss';

const Map = (props) => {
  const { center, zoom } = props;
  console.log(center, zoom)
  return(
    <div style={{height: '100vh', width: '100%'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: 'AIzaSyDB8SS8Xy8AGlUmcAOQhqurMugTBv31xns' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Pin 
          lat={39.751774}
          lng={-104.996809}
          text={'Turing'}
        />
        <Pin
          lat={39.773563} 
          lng={-105.039513}
          text={'David\'s House'}
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map;