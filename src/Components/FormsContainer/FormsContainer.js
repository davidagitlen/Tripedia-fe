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
  const { formState } = useContext(FormContext);
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
  const { accommodations, attractions, food, drinks, services } = formState; 
  const forms = [ accommodations, attractions, food, drinks, services ];
  const collapsedForm = collapsed ? 
  'collapsed-forms__button' :
  'not-collapsed-forms__button';
  const collapsedClass = collapsed ? 'collapsed-forms__container' : 'forms-container__container';

  return (
    <div className="wrapper-div">
      <div className={collapsedForm}>
        <div className={collapsedClass}>
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
    </div>
  );
}

export default FormsContainer;
