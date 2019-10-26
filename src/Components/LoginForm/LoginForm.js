import React, { useState, useContext } from "react";
import "./LoginForm.scss";
import { NavLink } from "react-router-dom";
import banner from "../../Images/banner.jpg";
import { UserContext } from '../../Contexts/UserContext';
import { loginUser } from '../../util/apiCalls';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const [loginState, handleForm] = useState({
    email: "",
    password: ""
  });
  const { email, password } = loginState;
  const isEnabled = email && password;

  const handleChange = e => {
    handleForm({ ...loginState, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    console.log('trying to handlesubmit')
    e.preventDefault();
    try {
      console.log('are we awaiting forever?');
      console.log('arguments', email, password)
      const userInfo = await loginUser(email, password);
      console.log('userInfo', userInfo)
      userLogin({email: userInfo.email, password: userInfo.password})
    } catch ({ message }) {
      return message;
    }
  }
  
  return (
    <main className="form_body">
      <img
        className="banner"
        src={banner}
        alt="Tripedia for all your travel planning needs"
      />
      <form className="login_form">
        <h2 className="form_title">Login Form</h2>
        <input
          className="email_input"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="password_input"
          placeholder="enter password"
          value={password}
          onChange={handleChange}
        />
        <NavLink to="/" className="button">
          <button 
            disabled={!isEnabled} 
            className="login_button" 
            type="submit" 
            onClick={handleSubmit}>
            Login
          </button>
        </NavLink>
        <NavLink to="/create_account">
          <p className="create_account_link">Create Account</p>
        </NavLink>
      </form>
    </main>
  );
};

export default LoginForm;
