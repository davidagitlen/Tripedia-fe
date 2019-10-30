import React, { useContext } from "react";
import "./SubmitTripForm.scss";
import { FormContext } from "../../Contexts/FormContext";
import submitSvg from '../../Images/end.svg';

const SubmitTripForm = ({ collapseForm, openForm, defaultForm }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  if (openForm.SubmitForm) {
    return (
      <form className="form__container">
        <button className="submit-trip__button">Create Trip</button>
      </form>
    );
  } else {
    return (
      <div
        onClick={e =>
          collapseForm({ ...defaultForm, SubmitForm: !openForm.SubmitForm })
        }
        className="form-closed__container"
      >
        <img alt="submit" src={submitSvg}></img>
        <p>- Complete Trip -</p>
      </div>
    );
  }
};

export default SubmitTripForm;
