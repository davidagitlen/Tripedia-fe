import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './CreateAccount.scss';
import banner from '../../Images/banner.png';
import { FormContext } from '../../Contexts/FormContext';
import { createAccount } from '../../util/apiCalls';

const CreateAccount = () => {
  const { formState, setFormState } = useContext(FormContext);
  const [accountState, setAccountState] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  const {name, email, password, password_confirmation} = accountState
  const isEnabled = email && password && name && password && password_confirmation;
  
  const handleChange = (e) => {
   setAccountState({...accountState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      const userInfo = await createAccount(name, email, password, password_confirmation);
      setFormState({
        ...formState,
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.id
      });
    } catch ({ message }) {
      return message;
    }
  };

  return (
    <main className="create-account__container">
      <img
        src={banner}
        alt="Tripedia for all your travel planning needs"
        className="banner"
      />
      <form className="create-account_form">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="password"
          name='password_confirmation'
          placeholder="confirm password"
          value={password_confirmation}
          onChange={handleChange}
          />
        {!isEnabled && 
          <button 
            className='button__disabled'
            type="submit"
            >
            Submit
          </button>}
        {isEnabled &&
        <NavLink to='/map'>
          <button 
            className='button__enabled'
            type="submit"
            onClick={handleSubmit}
            >
            Submit
          </button>
        </NavLink>
        }
        <NavLink to="/">
          <p>Login</p>
        </NavLink>
      </form>
    </main>
  );
};

export default CreateAccount;
