import React, { useState, useContext } from "react";
import "./Pin.scss";
import accommodationPin from "../../Images/accommodation-pin.svg";
import foodPin from "../../Images/food-pin.svg";
import mapPin from "../../Images/map-pin.svg";
import drinkPin from "../../Images/drink-pin.svg";
import attractionPin from "../../Images/attractions-pin.svg";
import servicePin from "../../Images/services-pin.svg";
import { FormContext } from "../../Contexts/FormContext";

const Pin = (props) => {
  const { name, image, rating, url, type, updateStops, lat, lng, stops, svg } = props;
  const [isHovered, toggleHovered] = useState(false);
  const { formState, setFormState } = useContext(FormContext);
  const stopFound = stops.find(stop => {
    return stop.name === name
  });
  const addOrRemoveText = stopFound ? "Remove From Trip" : "Add To Trip";

  const handleMouseOver = () => {
    toggleHovered(!isHovered);
  };

  const handleUpdateStops = () => {
    if (stopFound) {
      const filteredStops = stops.filter(
        stop => stop.name !== name
      );
      updateStops(filteredStops);
      setFormState({...formState, waypoints: filteredStops })
    } else {
      const stopToAdd = {
        name,
        image,
        rating,
        url,
        type,
        latitude: lat,
        longitude: lng,
        updateStops,
        svg
      };
      updateStops([...stops, stopToAdd]);
      setFormState({...formState, waypoints: [...formState.waypoints, stopToAdd]});
    }
  };

  const switchImage = imageType => {
    switch (imageType) {
      case "accommodations":
        return accommodationPin;
      case "food":
        return foodPin;
      case "drinks":
        return drinkPin;
      case "attractions": 
        return attractionPin;
      case 'services':
        return servicePin;
      default:
        return mapPin;
    }
  };

  const imagePath = switchImage(svg);

  if (!isHovered) {
    return (
      <div className="pin" onMouseEnter={handleMouseOver}>
        <img className="pin-image" src={imagePath} alt={type} />
      </div>
    );
  } else {
    return (
      <div className="pin-hover" onMouseLeave={handleMouseOver}>
        <h3>{name}</h3>
        <img
          style={{ width: "50px", height: "50px" }}
          src={image}
          alt={name}
        ></img>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {rating}
        </a>
        <button onClick={handleUpdateStops}>
          {addOrRemoveText}
        </button>
      </div>
    );
  }
};

export default Pin;
