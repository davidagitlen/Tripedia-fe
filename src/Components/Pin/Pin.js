import React, { Component, useState } from "react";
import "./Pin.scss";
import schoolPin from "../../images/school-pin.svg";
import housePin from "../../images/house-pin.svg";
import mapPin from "../../images/map-pin.svg";


const Pin = (props) => {
  const [isHovered, toggleHovered] = useState(false);
  const toggleWaypointText = 'bh';
  // const { isHovered } = this.state;
  const { name, image, rating, url, type, addWaypt, lat, lng } = props;

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
        <button onClick={(e) => addWaypt(e.target.value)} value={[lat, lng]}>Add to Trip</button>
      </div>
    );
  }
}

export default Pin;
