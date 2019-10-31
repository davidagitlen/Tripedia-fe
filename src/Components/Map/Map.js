import React, { useState, useContext, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin/Pin';
import './Map.scss'; 
import { FormContext } from '../../Contexts/FormContext';
import { LoadingContext } from "../../Contexts/LoadingContext";
import { getApiKey } from '../../util/apiCalls';

  const Map = () => {
  const { formState } = useContext(FormContext);
  const { isLoadingState } = useContext(LoadingContext);
  const { loadingArray } = isLoadingState;
  const [ keyString, updateKeyString ] = useState('')
  const [stops, updateStops] = useState([]);
  const waypoints = stops.map(stop => ({
    location : {
      lat: stop.latitude,
      lng: stop.longitude
    },
    stopover: true
  }));

  let start = formState.origin;
  let end = formState.destination;

  const displayRoute = (map, maps) => {
    let request = {
      origin: start,
      destination: end,
      waypoints,
      travelMode: "DRIVING"
    };
    let directionsRenderer = new maps.DirectionsRenderer({
      path: { start, end },
      draggable: true,
      suppressMarkers: true
    });
    let directionsService = new maps.DirectionsService();
    directionsService.route(request, async function(result, status) {
      if (status === "OK") {
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
        svg={yelp.svg}
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