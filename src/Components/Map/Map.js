import React from 'react';
import GoogleMapReact from 'google-map-react';
// import Polyline from 'google-map-react';
import Pin from '../Pin/Pin';
import './Map.scss';

// const Polyline = () => {
//   <Polyline
//     path={pathCoordinates}
//     options={{
//       strokeColor: '#00ffff',
//       strokeOpacity: 1,
//       strokeWeight: 2,
//       icons: [{
//         icon: "hello",
//         offset: '0',
//         repeat: '10px'
//       }],
//     }}
//   />
// }

const Map = (props) => {
  const { center, zoom } = props;

  const displayRoute = (map, maps) => {
    let start = { lat: 39.751774, lng: -104.996809 };
    let end = { lat: 39.773563, lng: -105.039513 };
    console.log(map)
    console.log(maps)
    let request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    };
    let directionsRenderer = new maps.DirectionsRenderer({
      path: { start, end },
      draggable: true,
      suppressMarkers: true
    });
    let directionsService = new maps.DirectionsService();
    directionsService.route(request, function(result, status) {
      console.log('result', result)
      if (status === 'OK') {
        directionsRenderer.setDirections(result)
      }
    })
    directionsRenderer.setMap(map)
  }
  return(
    <div style={{height: '80vh', width: '100%'}}>
      <GoogleMapReact
        
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({map, maps}) => displayRoute(map, maps)}
      >
        <Pin
          lat={39.773563} 
          lng={-105.039513}
          text={'David\'s House'}
          type='house'
        />
        <Pin
          lat={39.751774}
          lng={-104.996809}
          text={'Turing'}
          type='school'
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map;