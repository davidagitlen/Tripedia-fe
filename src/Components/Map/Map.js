import React, { useState, useContext, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin/Pin';
import './Map.scss'; 
import { FormContext } from '../../Contexts/FormContext';
import { LoadingContext } from "../../Contexts/LoadingContext";
import { getApiKey } from '../../util/apiCalls';

const Map = (props) => {
const { formState, setFormState } = useContext(FormContext);
const { isLoadingState, setLoadingContext} = useContext(LoadingContext);
const { isLoading } = isLoadingState;
console.log('map component isloading: ', isLoading)
const [ keyString, updateKeyString ] = useState('')
const [stops, updateStops] = useState([]);
const waypoints = stops.map(stop => ({
  location : {
    lat: stop.latitude,
    lng: stop.longitude
  },
  stopover: true
}));

const { origin, destination } = formState;
const { center, zoom } = props;
let start = { lat: 39.739131, lng: -104.990085 };
let end = { lat: 40.027750, lng: -105.270350 };

  const displayRoute = (map, maps) => {
    let request = {
      origin,
      destination,
      waypoints,
      travelMode: "DRIVING"
    };
    let directionsRenderer = new maps.DirectionsRenderer({
      path: { start, end },
      draggable: true,
      suppressMarkers: true
    });
    let directionsService = new maps.DirectionsService();
    directionsService.route(request, async function (result, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(result)
      }
    })
    directionsRenderer.setMap(map);
  }

  const createPin = (yelp, i) => {
    return (
      <Pin
        key={i + Date.now()}
        lat={yelp.latitude}
        lng={yelp.longitude}
        name={yelp.name}
        image={yelp.image}
        rating={yelp.rating}
        url={yelp.url}
        type="house"
        updateStops={updateStops}
        waypoints={waypoints}
        stops={stops}
      />
    )
  };

  const { selectedCategories } = formState; 
  console.log('in map selectedCategories: ', selectedCategories)

  const stopList = stops.map((stop, i) => createPin(stop, i));

  const pinList = selectedCategories.map((obj, i) => createPin(obj, i));

  const pinsToRender = pinList.length ? pinList.filter(pin => !stops.find(stop => stop.name === pin.name)) : stopList; 

  console.log('in map pinList: ', pinList);
  const returnApiKey = async () => {
    const apiKey = await getApiKey();
    updateKeyString(apiKey)
  };

  useEffect(() => {
    returnApiKey();
  });
 
  if (keyString) {
    return ( 
        <div 
        style={{ height: '80vh', width: '100%' }}>
          <GoogleMapReact
            key={isLoading}
            bootstrapURLKeys={{ key: keyString }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => displayRoute(map, maps)}
          >
            {/* <Pin
              lat={39.773563}
              lng={-105.039513}
              text={'David\'s House'}
              type='house'
              updateStops={updateStops}
              waypoints={waypoints}
              stops={stops}
            />
            <Pin
              lat={39.751774}
              lng={-104.996809}
              text={'Turing'}
              type='school'
              updateStops={updateStops}
              waypoints={waypoints}
              stops={stops}
            />
            {createPin()} */}
            {pinsToRender}
          </GoogleMapReact>
          <button onClick={() => setLoadingContext({...isLoadingState, isLoading: !isLoading })}></button>
        </div>
      )
  } else {
    return(
      <div>
        <p>Why the fuck</p>
      </div>
    ) 
  }
}

 

export default Map;
