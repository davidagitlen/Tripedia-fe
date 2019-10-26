import React, { useState, useContext } from "react";
import "./LoginForm.scss";
import { NavLink } from "react-router-dom";
import banner from "../../images/banner.jpg";

const LoginForm = () => {
  const [loginState, handleForm] = useState({
    email: "",
    password: ""
  });
  const { email, password } = loginState;
  const isEnabled = email && password;
  const handleChange = e => {
    handleForm({ ...loginState, [e.target.name]: e.target.value });
  };
  
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
            placeholder='enter password'
            value={password}
            onChange={handleChange}
          />
        <button disabled={!isEnabled} className="login_button" type="submit">
          Login
        </button>
        <NavLink to="/create_account">
          <p className="create_account_link">Create Account</p>
        </NavLink>
      </form>
    </main>
  );
};

export default LoginForm;
