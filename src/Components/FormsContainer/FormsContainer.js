import React, { Component } from "react";
import "./FormsContainer.scss";
import StartForm from "../StartForm/StartForm";
import AttractionsForm from "../AttractionsForm/AttractionsForm";
import AccomidationsForm from "../AccommodationsForm/AccommodationsForm";
import FoodForm from "../FoodForm/FoodForm";
import DrinksForm from "../DrinksForm/DrinksForm";
import ServicesForm from "../ServicesForm/ServicesForm";
import SubmitTripForm from "../SubmitTripForm/SubmitTripForm";

class FormsContainer extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  collapseFormContainer = e => {
    const { collapsed } = this.state;
    e.preventDefault();
    this.setState({ collapsed: !collapsed });
  };

  render() {
    const { collapsed } = this.state;

    if (collapsed) {
      return (
        <div className="collapsed-forms__button">
          <button className='collapse_button'
            onClick={e => {
              this.collapseFormContainer(e);
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
          <button className='collapse_button'
            onClick={e => {
              this.collapseFormContainer(e);
            }}
          >
            {"||"}
          </button>
        </div>
      );
    }
  }
}

export default FormsContainer;
