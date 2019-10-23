import React, { useState } from 'react';
import './LoginForm.scss';
import banner from '../../images/banner.jpg'
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const [emailInput, handleEmail] = useState('');
  const [passwordInput, handlePassword] = useState('');
  const isEnabled = emailInput.length > 0 && passwordInput.length > 0;

  return (
    <main>
      <img src={banner} alt="Tripedia for all your travel planning needs" /> 
      <form className="login_form">
        <h2>Login Form</h2>
        <input
          type="email"
          className="email_input"
          placeholder="email"
          value={emailInput}
          onChange={(e) => handleEmail(e.target.value)}>
        </input>
        <input
          type="password"
          className="password_input"
          placeholder="password"
          value={passwordInput}
          onChange={(e) => handlePassword(e.target.value)}>
        </input>
        <button
          disabled={!isEnabled}
          className="login_button"
          type="submit">Login
        </button>
        <NavLink to='/create_account'><p className="create_account_link">Create An Account</p></NavLink>
      </form> 
    </main>
  )
}

export default LoginForm;