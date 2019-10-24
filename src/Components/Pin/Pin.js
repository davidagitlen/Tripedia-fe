import React, {Component} from "react";
import "./Pin.scss";
import schoolPin from "../../images/school-pin.svg";
import housePin from "../../images/house-pin.svg";
import mapPin from "../../images/map-pin.svg";

class Pin extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false
    }
  }

  handleMouseHover = () => {
    this.setState({isHovered: !this.state.isHovered})
  }
  
  switchImage = imageType => {
    switch (imageType) {
      case "school":
        return schoolPin;
      case "house":
        return housePin;
      default:
        return mapPin;
    }
  };
  render() {
    const { isHovered } = this.state;
    const { name, image, rating, url, type, addWaypt, lat, lng} = this.props;
    const imagePath = this.switchImage(type);
    if(!isHovered) {
      return (
        <div className="pin" onMouseEnter={this.handleMouseHover}>
          <img className='pin-image' src={imagePath} alt={type} />
        </div>
      );
    } else {
      return (
        <div className='pin-hover'
          onMouseLeave={this.handleMouseHover}>
            <h3>{name}</h3>
            <img style={{ width: '50px', height: '50px' }} src={image} alt={name}></img>
            <a href={url} target="_blank" rel="noopener noreferrer">{rating}</a>
            <button onClick={(e) => addWaypt(e.target.value)} value={[lat, lng]}>Add to Trip</button>
        </div>
      );
    }
  }
};

export default Pin;
