import React, {useState} from "react";
import GoogleMapReact from "google-map-react";
import Pin from "../Pin/Pin";
import "./Map.scss";

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

const Map = props => {
  const [allWaypoints, createNewWaypoint] = useState([])
  const { center, zoom } = props;
  const addWaypt = value => {
    const coordinates = value.split(',')
    createNewWaypoint([...allWaypoints, { location: { lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1]) }, stopover: true }])

  };
  const createPin = () => {
    console.log('rerender')
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
        addWaypt={addWaypt}
      />
    )
  };
  const displayRoute = (map, maps) => {
    console.log('HIT')
    let start = { lat: 39.751774, lng: -104.996809 };
    let end = { lat: 39.773563, lng: -105.039513 };
    let request = {
      origin: start,
      destination: end,
      waypoints: allWaypoints,
      travelMode: "DRIVING"
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
        onGoogleApiLoaded={({ map, maps }) => displayRoute(map, maps)}
        >
        <Pin
          lat={39.773563}
          lng={-105.039513}
          text={"David's House"}
          type="school"
          />
        <Pin
          lat={39.751774}
          lng={-104.996809}
          text={"Turing School"}
          type="school"
          />
        {createPin()}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
