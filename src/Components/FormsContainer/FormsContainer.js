import React, { useState, useContext } from "react";
import "./FormsContainer.scss";
import StartForm from "../StartForm/StartForm";
import AttractionsForm from "../AttractionsForm/AttractionsForm";
import AccommodationsForm from "../AccommodationsForm/AccommodationsForm";
import FoodForm from "../FoodForm/FoodForm";
import DrinksForm from "../DrinksForm/DrinksForm";
import ServicesForm from "../ServicesForm/ServicesForm";
import SubmitTripForm from "../SubmitTripForm/SubmitTripForm";
import { FormContext } from '../../Contexts/FormContext';

export const FormsContainer = () => {
  const { formState, setFormState } = useContext(FormContext);
  const [collapsed, collapseFormContainer] = useState(false);

  const [openForm, collapseForm] = useState({
    StartForm: true,
    AttractionsForm: false,
    AccommodationsForm: false,
    FoodForm: false,
    DrinksForm: false,
    ServicesForm: false,
    SubmitTripForm: false
  });

  const defaultOpenForm = {
    StartForm: false,
    AttractionsForm: false,
    AccommodationsForm: false,
    FoodForm: false,
    DrinksForm: false,
    ServicesForm: false,
    SubmitTripForm: false
  };

  const { accommodations, attractions, food, drinks, services, miscellaneous } = formState; 

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
          <StartForm
            collapseForm={collapseForm}
            openForm={openForm}
            defaultForm={defaultOpenForm}
          />
          <AttractionsForm
            formObject={attractions}
            collapseForm={collapseForm}
            openForm={openForm}
            defaultForm={defaultOpenForm}
          />
          <AccommodationsForm
            formObject={accommodations}
            collapseForm={collapseForm}
            openForm={openForm}
            defaultForm={defaultOpenForm}
          />
          <FoodForm
            formObject={food}
            collapseForm={collapseForm}
            openForm={openForm}
            defaultForm={defaultOpenForm}
          />
          <DrinksForm
            formObject={drinks}
            collapseForm={collapseForm}
            openForm={openForm}
            defaultForm={defaultOpenForm}
          />
          <ServicesForm
            formObject={services}
            collapseForm={collapseForm}
            openForm={openForm}
            defaultForm={defaultOpenForm}
          />
          <SubmitTripForm
            collapseForm={collapseForm}
            openForm={openForm}
            defaultForm={defaultOpenForm}
          />
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
