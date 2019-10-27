import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './CreateAccount.scss';
import banner from '../../Images/banner.jpg';
import { UserContext } from '../../Contexts/UserContext';
import { createAccount, loginUser } from '../../util/apiCalls';

const CreateAccount = () => {
  const { createUser } = useContext(UserContext);
  
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

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userInfo = await createAccount(name, email, password, confirmPassword);
      createUser({ 
        name: userInfo.name, 
        email: userInfo.email, 
        password: userInfo.password,
        password_confirmation: userInfo.passwordConfirmation
      });
    } catch ({ message }) {
      return message;
    }
  };

  return (
    <main className="form_body">
      <img
        src={banner}
        alt="Tripedia for all your travel planning needs"
        className="banner"
      />
      <form className="create_account_form">
        <h2 className="form_title">Create Account</h2>
        <input
          type="text"
          className="name_input"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          className="email_input"
          placeholder="email"
          value={email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          className="password_input"
          placeholder="password"
          value={password}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="confirmPassword"
          className="confirm_password_input"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleChange}
        ></input>
        <NavLink to="/" className="button">
          <button
            disabled={!isEnabled}
            className="submit_button"
            type="submit"
            onClick={handleSubmit}
            >Submit
          </button>
        </NavLink>
        <NavLink to="/login">
          <p className="login_link">Login</p>
        </NavLink>
      </form>
    </main>
  );
}

export default CreateAccount;