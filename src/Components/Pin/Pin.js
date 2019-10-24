import React, { useState } from "react";
import "./Pin.scss";
import schoolPin from "../../images/school-pin.svg";
import housePin from "../../images/house-pin.svg";
import mapPin from "../../images/map-pin.svg";


const Pin = (props) => {
  const { name, image, rating, url, type, updateWaypoints, lat, lng, waypoints } = props;
  console.log('waypoints', waypoints)
  console.log('lat and lng', lat, lng)
  const [isHovered, toggleHovered] = useState(false);
  const waypointFound = waypoints.find(waypoint => {
    return waypoint.lat === lat && waypoint.lng === lng
  });
  const addOrRemoveText = waypointFound ? 'Remove From Trip' : 'Add To Trip';

  const handleMouseOver = () => {
    toggleHovered(!isHovered)
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
        <img style={{ width: '50px', height: '50px' }} src={image} alt={name}></img>
        <a href={url} target="_blank" rel="noopener noreferrer">{rating}</a>
        <button 
          onClick={(e) => 
          updateWaypoints([...waypoints, { location: { lat, lng } }])}
        >
        {addOrRemoveText}
        </button>
      </div>
    );
  }
}

export default Pin;
