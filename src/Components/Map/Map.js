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
  const flightPath = [
    { lat: 39.751774, lng: -104.996809 },
    { lat: 39.773563, lng: -105.039513 }
  ];
  // const renderPolylines = (map, maps) => {
  //   console.log('map:', map, 'maps:', maps)
   
    // let geodesicPolyline = new maps.Polyline({
    //   path: flightPath
    // });
    // geodesicPolyline.setMap(map)
    // directionsPath.setMap(map)
  // }
  const displayRoute = (map, maps) => {
    let start = { lat: 39.751774, lng: -104.996809 };
    let end = { lat: 39.773563, lng: -105.039513 };
    // let start = '4145 Perry St., Denver, CO';
    // let end = '1331 17th St., Denver, CO';
    let request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    };
    let directionsRenderer = new maps.DirectionsRenderer({
      path: flightPath,
      draggable: true,
      suppressMarkers: true
    });
    let directionsService = new maps.DirectionsService();
    directionsService.route(request, function(result, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(result)
      }
    })
    directionsRenderer.setMap(map)
    directionsRenderer.setPanel(map)
  }
  // const polylineOptions = {
  //   path: flightPath,
  //   draggable: true,
  //   editable: true
  // };
  // const setMap = (args) => {
  //   const { maps }  = args;
  //   console.log(maps)
    // if (maps && typeof (maps.DirectionRenderer) === "function") {
    //   // clean previous directions rendered to the map;
    //   const directionDisplay = new maps.DirectionRenderer();
    //   directionDisplay.setOptions(directionRendererOptions);
    //   directionDisplay.setMap(maps);
    // }
    // const routePolyline = new maps.Polyline(polylineOptions);
    // routePolyline.setMap(maps);
  // }
  return(
    <div style={{height: '100vh', width: '100%'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: 'AIzaSyDB8SS8Xy8AGlUmcAOQhqurMugTBv31xns' }}
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