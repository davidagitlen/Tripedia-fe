import React, { useState } from "react";
import "./Pin.scss";
import schoolPin from "../../images/school-pin.svg";
import housePin from "../../images/house-pin.svg";
import mapPin from "../../images/map-pin.svg";


const Pin = (props) => {
  const { name, image, rating, url, type, updateStops, lat, lng, stops } = props;
  console.log('stops', stops)
  console.log('lat and lng', lat, lng)
  const [isHovered, toggleHovered] = useState(false);
  const stopFound = stops.find(stop => {
    return stop.lat === lat && stop.lng === lng
  });
  const addOrRemoveText = stopFound ? 'Remove From Trip' : 'Add To Trip';

  const handleMouseOver = () => {
    toggleHovered(!isHovered)
  }

  const handleUpdateStops = () => {
    if (stopFound) {
      const filteredStops = stops.filter(stop => 
        stop.lat !== lat && stop.lng !== lng
      );
      updateStops(filteredStops)
    } else {
      const stopToAdd = {
        name,
        image,
        rating,
        url,
        type,
        lat,
        lng
      }
      updateStops([...stops, stopToAdd])
    }
  }

  const switchImage = imageType => {
    switch (imageType) {
      case "school":
      return schoolPin;
      case "house":
      return housePin;
      default:
      return mapPin;
    }
  };
  
  const imagePath = switchImage(type);

  if (!isHovered) {
    return (
      <div
        onMouseEnter={handleMouseOver}
      >
        <img className='pin'
          src={imagePath}
          alt={type}
        />
      </div>
    );
  } else {
    return (
      <div className='pin-hover'
        onMouseLeave={handleMouseOver}>
        <h3>{name}</h3>
        <img 
          style={{ width: '50px', height: '50px' }} 
          src={image} 
          alt={name}></img>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
        {rating}
        </a>
        <button 
          onClick={handleUpdateStops}
        >
        {addOrRemoveText}
        </button>
      </div>
    );
  }
}

export default Pin;
