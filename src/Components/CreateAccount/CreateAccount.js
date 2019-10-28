import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./CreateAccount.scss";
import banner from "../../Images/banner.png";
import { UserContext } from "../../Contexts/UserContext";
import { createAccount } from "../../util/apiCalls";

const CreateAccount = () => {
  const { createUser } = useContext(UserContext);

  const [accountState, setAccountState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { name, email, password, confirmPassword } = accountState;
  const isEnabled = email && password && name && password && confirmPassword;

  const handleChange = e => {
    setAccountState({ ...accountState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userInfo = await createAccount(
        name,
        email,
        password,
        confirmPassword
      );
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
    <main className="create-account__container">
      <img
        src={banner}
        alt="Tripedia for all your travel planning needs"
        className="banner"
      />
      <form className="create-account_form">
        <h2 className="form_title">Create Account</h2>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleChange}
        ></input>
        {!isEnabled && (
          <button className="button__disabled" type="submit">
            Submit
          </button>
        )}
        {isEnabled && (
          <NavLink to="/">
            <button className="button__enabled" type="submit">
              Submit
            </button>
          </NavLink>
        )}
        <NavLink to="/login">
          <p>Login</p>
        </NavLink>
      </form>
    </main>
  );
};

export default CreateAccount;
