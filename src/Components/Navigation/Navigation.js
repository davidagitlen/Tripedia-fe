import React from 'react';
import './Navigation.scss';
import Logo from '../../Images/Logo1.png';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return(
    <nav className='navigation__contianer'>
      <div className='logo-title__nav'>
        <NavLink to='/'>
          <img className='tripedia-logo__nav' src='' alt='Tripedia Logo' />
        </NavLink>
        <h1 className='tripedia-text__nav'>TRIPEDIA</h1>
      </div>
      <NavLink to='/login'>
        <p>LogOut</p>
      </NavLink>
    </nav>
  )
}

export default Navigation;