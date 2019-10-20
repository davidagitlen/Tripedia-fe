import React from 'react';
import './FormsContainer.scss';
import StartForm from '../StartForm/StartForm';
import AttractionsForm from '../AttractionsForm/AttractionsForm';
import AccomidationsForm from '../AccommodationsForm/AccommodationsForm';
import FoodForm from '../FoodForm/FoodForm';
import DrinksForm from '../DrinksForm/DrinksForm';
import ServicesForm from '../ServicesForm/ServicesForm';
import SubmitTripForm from '../SubmitTripForm/SubmitTripForm';

const FormsContainer = () => {
  return (
    <div className='forms-container__container'>
      <StartForm />
      <AttractionsForm />
      <AccomidationsForm />
      <FoodForm />
      <DrinksForm />
      <ServicesForm />
      <SubmitTripForm />
    </div>
  )
}

export default FormsContainer;