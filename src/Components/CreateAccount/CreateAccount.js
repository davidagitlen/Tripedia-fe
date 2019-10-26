import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CreateAccount.scss';
import banner from '../../Images/banner.jpg'


const CreateAccount = () => {
  
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
    <main className="form_body">
      <img src={banner} alt="Tripedia for all your travel planning needs" className="banner" />
      <form className="create_account_form">
        <h2 className="form_title">Create Account</h2>
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
        <NavLink to="/" className="button">
          <button
            disabled={!isEnabled}
            className="submit_button"
            type="submit">Submit
          </button>
        </NavLink>
        <NavLink to="/login">
          <p className="login_link">Login</p>
        </NavLink>
      </form>
    </main>
  )
}

export default CreateAccount;