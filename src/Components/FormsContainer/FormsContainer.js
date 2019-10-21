import React, { useState } from "react";
import "./FormsContainer.scss";
import StartForm from "../StartForm/StartForm";
import AttractionsForm from "../AttractionsForm/AttractionsForm";
import AccomidationsForm from "../AccommodationsForm/AccommodationsForm";
import FoodForm from "../FoodForm/FoodForm";
import DrinksForm from "../DrinksForm/DrinksForm";
import ServicesForm from "../ServicesForm/ServicesForm";
import SubmitTripForm from "../SubmitTripForm/SubmitTripForm";

export const FormsContainer = () => {
  const [collapsed, collapseFormContainer] = useState(false);

  if (collapsed) {
    return (
      <div className="collapsed-forms__button">
        <button
          className="collapse_button"
          onClick={() => {
            collapseFormContainer(!collapsed);
          }}
        >
          {"||"}
        </button>
      </div>
    );
  } else {
    return (
      <div className="not-collapsed-forms__button">
        <div className="forms-container__container">
          <StartForm />
          <AttractionsForm />
          <AccomidationsForm />
          <FoodForm />
          <DrinksForm />
          <ServicesForm />
          <SubmitTripForm />
        </div>
        <button
          className="collapse_button"
          onClick={e => {
            collapseFormContainer(!collapsed);
          }}
        >
          {"||"}
        </button>
      </div>
    );
  }
};

export default FormsContainer;
