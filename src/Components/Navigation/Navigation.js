import React from "react";
import "./Navigation.scss";
import Logo from "../../Images/Logo1.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation__contianer">
      <div className="logo-title__nav">
          <img className="tripedia-logo__nav" src={Logo} alt="Tripedia Logo" />
        <h1 className="tripedia-text__nav">TRIPEDIA</h1>
      </div>
      <NavLink to="/">
        <p>LogOut</p>
      </NavLink>
    </nav>
  );
};

export default Navigation;
