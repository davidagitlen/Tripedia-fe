import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin/Pin';
import './Map.scss';

const Map = (props) => {
  const [waypoints, updateWaypoints] = useState([]);
  const { center, zoom } = props;
  let start = { lat: 39.739131, lng: -104.990085 };
  let end = { lat: 40.027750, lng: -105.270350 };

  const displayRoute = (map, maps) => {
    console.log(map)
    console.log(maps)
    let request = {
      origin: start,
      destination: end,
      waypoints,
      travelMode: 'DRIVING'
    };
    let directionsRenderer = new maps.DirectionsRenderer({
      path: { start, end },
      draggable: true,
      suppressMarkers: true
    });
    let directionsService = new maps.DirectionsService();
    directionsService.route(request, async function (result, status) {
      console.log('result', result)
      if (status === 'OK') {
        // getPoints(result);
        directionsRenderer.setDirections(result)
      }
    })
    directionsRenderer.setMap(map)
  }


  return (
    <div
        style={{ height: '80vh', width: '100%' }}
      >
        <button
          style={{ position: 'absolute', zIndex: 100 }}
           onClick={() => updateWaypoints([{ location: { lat: 39.734551, lng: -104.832522 }, stopover: true }, { location: { lat: 39.739131, lng: -104.990085 }, stopover: true }, { location: { lat: 40.734551, lng: -104.832522 }, stopover: true }])
            }>
        </button>
        <GoogleMapReact
          key={waypoints}
          bootstrapURLKeys={{ key: 'AIzaSyDB8SS8Xy8AGlUmcAOQhqurMugTBv31xns' }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => displayRoute(map, maps)}
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