import React, { useState } from 'react';
import './CreateAccount.scss';
import banner from '../../images/banner.jpg'


const CreateAccount = () => {
  // const [nameInput, handleName] = useState('');
  // const [emailInput, handleEmail] = useState('');
  // const [passwordInput, handlePassword] = useState('');
  // const [confirmPasswordInput, handlePasswordConfirmation] = useState('');
  
  const [accountState, setAccountState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {name, email, password, confirmPassword} = accountState
  const isEnabled = email && password && name && password && confirmPassword;
  
 const handleChange = (e) => {
   setAccountState({...accountState, [e.target.name]: e.target.value })
  }

  return(
    <main>
      <img src={banner} alt="Tripedia for all your travel planning needs" />
      <form className="create_account_form">
        <h2>Create Account</h2>
        <input
          type="text"
          className="name_input"
          placeholder="name"
          name='name'
          value={name}
          onChange={handleChange}></input>
        <input
          type="email"
          name='email'
          className="email_input"
          placeholder="email"
          value={email}
          onChange={handleChange}>
        </input>
        <input
          type="password"
          name='password'
          className="password_input"
          placeholder="password"
          value={password}
          onChange={handleChange}>
        </input>
        <input
          type="password"
          name='confirmPassword'
          className="confirm_password_input"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleChange}>
        </input>
        <button
          disabled={!isEnabled}
          className="submit_button"
          type="submit">Submit
        </button>
      </form>
    </main>
  )
}

export default CreateAccount;