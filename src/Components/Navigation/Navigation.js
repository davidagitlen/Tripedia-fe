import React from 'react';
import './Navigation.scss';
import Logo from '../../images/Logo1.png';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return(
    <nav className='navigation__contianer'>
      <div className='logo-title__nav'>
        <NavLink to='/'><img className='tripedia-logo__nav' src={Logo} alt='Tripedia Logo' /></NavLink>
        <h1 className='tripedia-text__nav'>TRIPEDIA</h1>
      </div>
      <p>LogOut</p>
    </nav>
  )
}

export default Navigation;