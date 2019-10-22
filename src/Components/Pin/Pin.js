import React from 'react';
import './Pin.scss';
import schoolPin from '../../images/school-pin.svg';
import housePin from '../../images/house-pin.svg';
import mapPin from '../../images/map-pin.svg';

const Pin = ({text, type}) => {
  const switchImage = (imageType) => {
    switch(imageType) {
      case 'school' : 
        return schoolPin;
      case 'house' :
        return housePin;
      default :
        return mapPin
    }
  }
  const imagePath = switchImage(type);
  return(
    <>
      <img src={imagePath} alt={type} style={{ height: '25px', width: '25px' }}/>
      <p>{text}</p>
    </>
  )
}

export default Pin;