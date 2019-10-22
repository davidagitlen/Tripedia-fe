import React from 'react';
import './Navigation.scss';
import Logo from '../../images/Logo1.png';

const Navigation = () => {
  return(
    <nav className='navigation__contianer'>
      <div className='logo-title__nav'>
        <img className='tripedia-logo__nav' src={Logo} alt='Tripedia Logo'/>
        <h1 className='tripedia-text__nav'>TRIPEDIA</h1>
      </div>
      <p>LogOut</p>
    </nav>
  )
}

export default Navigation;