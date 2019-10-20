import React from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin/Pin';
import './Map.scss';

const Map = (props) => {
  const { center, zoom } = props;
  // const directionRendererOptions = {
  //   draggable: true,
  // };
  // const polylineOptions = {
  //   draggable: true,
  //   editable: true
  // };
  // const setMap = (args) => {
  //   const { map, maps }  = args;
  //   if (maps && typeof (maps.DirectionRenderer) === "function") {
  //     // clean previous directions rendered to the map;
  //     const directionDisplay = new maps.DirectionRenderer();
  //     directionDisplay.setOptions(directionRendererOptions);
  //     directionDisplay.setMap(maps);
  //   }
  //   const routePolyline = new google.maps.Polyline(polylineOptions);
  //   routePolyline.setMap(maps);
  // }
  return(
    <div style={{height: '100vh', width: '100%'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: 'AIzaSyDB8SS8Xy8AGlUmcAOQhqurMugTBv31xns' }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={setMap}
      >
        <Pin 
          lat={39.751774}
          lng={-104.996809}
          text={'Turing'}
          type='school'
        />
        <Pin
          lat={39.773563} 
          lng={-105.039513}
          text={'David\'s House'}
          type='house'
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map;