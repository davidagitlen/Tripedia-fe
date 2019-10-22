import React, { useState } from 'react';
import './FormsContainer.scss';

const FormsContainer = () => {
  
  const [collapsed, collapsedFormContainer] = useState(false);
  
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
            collapseForm={collapseForm}
            openForm={openForm}
            defaultForm={defaultOpenForm}
          />
          <AccommidationsForm
            collapseForm={collapseForm}
            openForm={openForm}
            defaultForm={defaultOpenForm}
          />
          <FoodForm collapseForm={collapseForm} />
          <DrinksForm collapseForm={collapseForm} />
          <ServicesForm collapseForm={collapseForm} />
          <SubmitTripForm collapseForm={collapseForm} />
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
