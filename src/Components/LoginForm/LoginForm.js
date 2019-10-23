import React, { useState } from 'react';
import './LoginForm.scss';
import banner from '../../images/banner.jpg'

const LoginForm = () => {
  const [emailInput, handleEmail] = useState('');
  const [passwordInput, handlePassword] = useState('');
  const isEnabled = emailInput.length > 0 && passwordInput.length > 0;

  return (
    <main>
      <img src={banner} alt="" /> 
      <form className="login_form">
        <h2>Login Form</h2>
        <input
          type="email"
          className="email_input"
          alt="email_input"
          placeholder="email"
          value={emailInput}
          onChange={(e) => handleEmail(e.target.value)}>
        </input>
        <input
          type="password"
          alt="password_input"
          className="password_input"
          placeholder="password"
          value={passwordInput}
          onChange={(e) => handlePassword(e.target.value)}>
        </input>
        <button
          disabled={!isEnabled}
          className="login_button"
          type="submit">Login</button>
      </form> 
    </main>
  )
}

export default LoginForm;