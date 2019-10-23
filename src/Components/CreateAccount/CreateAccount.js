import React, { useState } from 'react';
import './CreateAccount.scss';
import banner from '../../images/banner.jpg'


const CreateAccount = () => {
  const [nameInput, handleName] = useState('');
  const [emailInput, handleEmail] = useState('');
  const [passwordInput, handlePassword] = useState('');
  const [confirmPasswordInput, handlePasswordConfirmation] = useState('');

  return(
    <main>
      <img src={banner} alt="Tripedia for all your travel planning needs" />
      <form>
        <h2>Create Account</h2>
        <input
          type="text"
          className="name_input"
          placeholder="name"
          value={nameInput}
          onChange={(e) => handleName(e.target.value)}></input>
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
        <input
          type="password"
          className="confirm_password_input"
          placeholder="confirm password"
          value={confirmPasswordInput}
          onChange={(e) => handlePasswordConfirmation(e.target.value)}>
        </input>
        <button
          // disabled={!isEnabled}
          className="submit_button"
          type="submit">Submit
        </button>
      </form>
    </main>
  )
}

export default CreateAccount;