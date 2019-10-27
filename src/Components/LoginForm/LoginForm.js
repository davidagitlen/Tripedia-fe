import React, { useState, useContext } from "react";
import "./LoginForm.scss";
import { NavLink } from "react-router-dom";
import banner from "../../Images/banner.png";
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
    e.preventDefault();
    try {
      const userInfo = await loginUser(email, password);
      userLogin({email: userInfo.email, password: userInfo.password})
    } catch ({ message }) {
      return message;
    }
  }

  return (
    <main className="login-form__container">
      <img
        className="banner"
        src={banner}
        alt="Tripedia for all your travel planning needs"
      />
      <form className="login__form">
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={password}
          onChange={handleChange}
        />
        {!isEnabled && (
          <button className="button__disabled" disabled={true} type="submit">
            Login
          </button>
        )}
        {isEnabled && 
          <NavLink to="/">
            <button className="button__enabled" type="submit" onClick={handleSubmit}>
              Login
            </button>
          </NavLink>
        }
        <NavLink to="/create_account">
          <p>Create Account</p>
        </NavLink>
      </form>
    </main>
  );
};

export default LoginForm;
