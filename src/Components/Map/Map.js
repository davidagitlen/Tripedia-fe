import React, { useState, useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin/Pin';
import './Map.scss'; 
import { LoadingContext } from "../../Contexts/LoadingContext";




const Map = (props) => {
const { isLoadingState, setLoadingContext} = useContext(LoadingContext);
const { isLoading } = isLoadingState;
  console.log('context map', isLoading)
  const [stops, updateStops] = useState([]);
  const waypoints = stops.map(stop => ({
    location : {
      lat: stop.lat,
      lng: stop.lng
    },
    stopover: true
  }));

  const { center, zoom } = props;
  let start = { lat: 39.739131, lng: -104.990085 };
  let end = { lat: 40.027750, lng: -105.270350 };

const mockYelpResponse = {
  id: "yRl2-nI6P15QASVda1qqwA",
  alias: "farmhouse-thai-eatery-lakewood",
  name: "Farmhouse Thai Eatery",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/LptPoRUPkDFObRHm5L1xuQ/o.jpg",
  is_closed: false,
  url:
    "https://www.yelp.com/biz/farmhouse-thai-eatery-lakewood?adjust_creative=pVrRdyk-0QZdpoY-HSxTFg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pVrRdyk-0QZdpoY-HSxTFg",
  review_count: 117,
  categories: [{ alias: "thai", title: "Thai" }],
  rating: 4.5,
  coordinates: { latitude: 39.71698, longitude: -105.08001 },
  transactions: [],
  price: "$$",
  location: {
    address1: "98 Wadsworth Blvd",
    address2: "Ste 117",
    address3: null,
    city: "Lakewood",
    zip_code: "80226",
    country: "US",
    state: "CO",
    display_address: ["98 Wadsworth Blvd", "Ste 117", "Lakewood, CO 80226"]
  },
  phone: "+13032372475",
  display_phone: "(303) 237-2475",
  distance: 1990.1371756025123
};

const cleanYelpResponse = yelp => {
  return {
    name: yelp.name,
    image: yelp.image_url,
    url: yelp.url,
    rating: yelp.rating,
    latitude: yelp.coordinates.latitude,
    longitude: yelp.coordinates.longitude,
    address: yelp.location.display_address,
    phone: yelp.display_phone
  };
};
  let currentMap, mapsResponse;
  const displayRoute = (map, maps) => {
    let request = {
      origin: start,
      destination: end,
      waypoints,
      travelMode: 'DRIVING'
    };
    currentMap = map;
    mapsResponse = maps;
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

  const createPin = () => {
    let yelp = cleanYelpResponse(mockYelpResponse);
    return (
      <Pin
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
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => displayRoute(map, maps)}
      />
    )
  };

  return (
    <div style={{ height: '80vh', width: '100%' }}>
        {/* <button
          style={{ position: 'absolute', zIndex: 100 }}
          onClick={() => updateWaypoints([{ location: { lat: 39.734551, lng: -104.832522 }, stopover: true }, { location: { lat: 39.739131, lng: -104.990085 }, stopover: true }, { location: { lat: 40.734551, lng: -104.832522 }, stopover: true }])
          }>
        </button> */}
        <GoogleMapReact
          // key={waypoints}
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
            updateStops={updateStops}
            waypoints={waypoints}
            stops={stops}
            map={currentMap}
            maps={mapsResponse}
            onGoogleApiLoaded={({ map, maps }) => displayRoute(map, maps)}
          />
          <Pin
            lat={39.751774}
            lng={-104.996809}
            text={'Turing'}
            type='school'
            updateStops={updateStops}
            waypoints={waypoints}
            stops={stops}
            map={currentMap}
            maps={mapsResponse}
            onGoogleApiLoaded={({ map, maps }) => displayRoute(map, maps)}
          />
          {createPin()}
        </GoogleMapReact>
        <button onClick={() => setLoadingContext({...isLoadingState, isLoading: !isLoading })}></button>
      </div>
    )
  }

 

export default Map;
