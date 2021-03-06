import React, { useState, useContext } from "react";
import "./LoginForm.scss";
import { NavLink } from "react-router-dom";
import banner from "../../Images/banner.png";
import { FormContext } from '../../Contexts/FormContext';
import { loginUser } from '../../util/apiCalls';

const LoginForm = () => {
  const { formState, setFormState } = useContext(FormContext);
  const [loginState, handleForm] = useState({
    email: "g@g.com",
    password: "pass"
  });
  const { email, password } = loginState;
  const isEnabled = email && password;
  
  const handleChange = e => {
    handleForm({ ...loginState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const userInfo = await loginUser(email, password);
      setFormState({
        ...formState,
        email: userInfo.email,
        name: userInfo.name,
        id: userInfo.id
      });
    } catch ({ message }) {
      return message;
    }
  };

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
        {isEnabled && (
          <NavLink to="/map">
            <button 
              className="button__enabled" 
              type="submit"
              onClick={handleSubmit}
              >
              Login
            </button>
          </NavLink>
        )}
        <NavLink to="/create_account">
          <p>Create Account</p>
        </NavLink>
      </form>
    </main>
  );
};

export default LoginForm;
