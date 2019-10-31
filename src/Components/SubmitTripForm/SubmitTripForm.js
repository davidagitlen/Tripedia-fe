import React, { useContext } from "react";
import "./SubmitTripForm.scss";
import { FormContext } from "../../Contexts/FormContext";
import { UserContext } from "../../Contexts/UserContext";
import { LoadingContext } from "../../Contexts/LoadingContext";
import { submitTrip } from "../../util/apiCalls";
import submitSvg from '../../Images/end.svg';

const SubmitTripForm = ({ collapseForm, openForm, defaultForm }) => {
  const { formState } = useContext(FormContext);
  const { user } = useContext(UserContext);
  const { setLoadingContext } = useContext(LoadingContext);
  const { originCity, destinationCity, trip_id, waypoints } = formState;
  const { id } = user;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
    setLoadingContext({ isLoading: true, loadingArray: [true] });
    await submitTrip(id, trip_id, originCity, destinationCity, waypoints);
    let timeout = setTimeout(() => {
      setLoadingContext({ isLoading: false, loadingArray: [false] });
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
