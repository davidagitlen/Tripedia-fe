import React, { Component } from 'react';
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

class Map extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      waypoints: []
    }
  }

  displayRoute = (map, maps) => {
    let start = { lat: 39.739131, lng: -104.990085 };
    let end = { lat: 40.027750, lng: -105.270350 };

    console.log(map)
    console.log(maps)
    let request = {
      origin: start,
      destination: end,
      waypoints: this.state.waypoints,
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
        console.log(await result.routes[0].overview_path[0].lat.Scopes)
        directionsRenderer.setDirections(result)
      }
    })
    directionsRenderer.setMap(map)
  }

  
  render() {
    console.log('rendering')
    const { center, zoom } = this.props;
    let routePoints = [];
    // const getPoints = async (response) => {
    //     routePoints = await response.routes[0].overview_path.map(point => ({
    //     lat: point.lat.scopes.b,
    //     lng: point.lat.scopes.a
    //   }))
    // }
    // let waypoints = []
    // if (this.state.count > 0) {
    //   waypoints = [{ location: { lat: 40, lng: 40 }, stopover: true }]
    // }
  
    return(
      <div 
        style={{height: '80vh', width: '100%'}}
      >
          <button
            style={{position: 'absolute', zIndex: 100}}
          onClick={() => this.setState({ waypoints: [{ location: { lat: 39.734551, lng: -104.832522 }, stopover: true }, { location: { lat: 42.323459, lng: -112.485763 }, stopover: true }, { location: { lat: 35.734551, lng: -100.832522 }, stopover: true } ]})}>
          </button>
        <GoogleMapReact
          key={this.state.waypoints}
          bootstrapURLKeys={{ key: 'AIzaSyDB8SS8Xy8AGlUmcAOQhqurMugTBv31xns' }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({map, maps}) => this.displayRoute(map, maps)}
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
}

export default Map;