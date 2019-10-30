import React, { useState, useContext, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin/Pin';
import './Map.scss'; 
import { FormContext } from '../../Contexts/FormContext';
import { LoadingContext } from "../../Contexts/LoadingContext";
import { getApiKey } from '../../util/apiCalls';

  const Map = () => {
  const { formState, setFormState } = useContext(FormContext);
  const { isLoadingState, setLoadingContext} = useContext(LoadingContext);
  const { isLoading, loadingArray } = isLoadingState;
  console.log('map component isloading: ', isLoading)
  const [ keyString, updateKeyString ] = useState('')
  const [stops, updateStops] = useState([]);
  console.log('in map stops: ', stops)
  const waypoints = stops.map(stop => ({
    location : {
      lat: stop.latitude,
      lng: stop.longitude
    },
    stopover: true
  }));

  // let start = { lat: 45.5051064, lng: -122.6750261 };
  // let end = { lat: 47.6062095, lng: -122.3320708 };
  let start = formState.origin;
  let end = formState.destination;

  const displayRoute = (map, maps) => {
    console.log('in displayRoute', typeof start, typeof end)
    let request = {
      origin: start,
      destination: end,
      waypoints,
      travelMode: "DRIVING"
    };
    let directionsRenderer = new maps.DirectionsRenderer({
      path: { newStart, newEnd },
      draggable: true,
      suppressMarkers: true
    });
    let directionsService = new maps.DirectionsService();
    directionsService.route(request, async function(result, status) {
      console.log('in directionsService checking status', status)
      if (status === "OK") {
        console.log('in directionsService result:', result)
        directionsRenderer.setDirections(result);
      }
    });
    directionsRenderer.setMap(map);
  };

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
    );
  };

  const { selectedCategories } = formState; 

  const stopList = stops.map((stop, i) => createPin(stop, i));
  const pinList = selectedCategories.map((obj, i) => createPin(obj, i));
  const pinsToRender = pinList.length ? pinList.filter(pin => !stops.find(stop => stop.name === pin.name)) : stopList; 

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
            key={loadingArray}
            bootstrapURLKeys={{ key: keyString }}
            defaultCenter={{ lat: 39.8285, lng: -98.5795 }}
            defaultZoom={4.5}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => displayRoute(map, maps)}
          >
            {pinsToRender}
          </GoogleMapReact>
          <button onClick={() => setLoadingContext({...isLoadingState, isLoading: !isLoading })}></button>
        </div>
      )
  } else {
    return(
      <div>
        <p></p>
      </div>
    ) 
  }
}

export default Map;