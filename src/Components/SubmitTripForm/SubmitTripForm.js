import React, { useContext } from "react";
import "./SubmitTripForm.scss";
import { FormContext } from "../../Contexts/FormContext";
import { submitTrip } from "../../util/apiCalls";
import submitSvg from '../../Images/end.svg';

const SubmitTripForm = ({ collapseForm, openForm, defaultForm }) => {
  const { formState, setFormState } = useContext(FormContext);
  const { originCity, destinationCity, trip_id, waypoints, id } = formState;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
    setFormState({
      ...formState, 
      isLoading: true, 
      loadingArray: [true] });
    await submitTrip(id, trip_id, originCity, destinationCity, waypoints);
    let timeout = setTimeout(() => {
      setFormState({
        ...formState, 
        isLoading: false, 
        loadingArray: [false] });
      clearTimeout(timeout);
    }, 12500);
    } catch ({message}) {
      return message
    }
  };

  if (openForm.SubmitForm) {
    return (
      <form className="form__container">
        <button 
          className="submit-trip__button"
          onClick={handleSubmit}
          >Create Trip</button>
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
