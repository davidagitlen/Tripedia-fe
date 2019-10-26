import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CreateAccount.scss';
import banner from '../../images/banner.png'


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
    <main className='create-account__container'>
      <img src={banner} alt="Tripedia for all your travel planning needs" className="banner" />
      <form className="create-account__form">
        <input
          type="text"
          placeholder="name"
          name='name'
          value={name}
          onChange={handleChange}></input>
        <input
          type="email"
          name='email'
          placeholder="email"
          value={email}
          onChange={handleChange}>
        </input>
        <input
          type="password"
          name='password'
          placeholder="password"
          value={password}
          onChange={handleChange}>
        </input>
        <input
          type="password"
          name='confirmPassword'
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleChange}>
        </input>
        {!isEnabled && 
          <button className='button__disabled'
            type="submit">Submit
          </button>}
        {isEnabled &&
        <NavLink to='/'>
          <button className='button__enabled'
            type="submit">Submit
          </button>
        </NavLink>}
        <NavLink to="/login">
          <p>Login</p>
        </NavLink>
      </form>
    </main>
  )
}

export default CreateAccount;