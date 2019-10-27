import React, { useState } from "react";
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
            <button className="button__enabled" type="submit">
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
