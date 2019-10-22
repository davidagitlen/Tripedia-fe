import React, { useState } from 'react';
import './LoginForm.scss';

const LoginForm = () => {
  const [emailInput, handleEmail] = useState('');
  const [passwordInput, handlePassword] = useState('')

  return (
    <>
      <p>LoginForm</p>
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
      {emailInput && passwordInput && <button
        className="login_button"
        type="submit">Login</button>}
    </>
  )
}

export default LoginForm;