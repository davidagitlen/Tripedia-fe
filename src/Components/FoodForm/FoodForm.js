import React from 'react';
import './FoodForm.scss';

const FoodForm = ({ collapseForm, openForm, defaultForm }) => {

  if(openForm.FoodForm) {
    return (
      <div className='food-form__container'>
        <p>FoodForm</p>
      </div>
    )
  } else {
    return (
      <div
        onClick={e => 
          collapseForm({
            ...defaultForm,
            FoodForm:
            !openForm.FoodForm
          })
        }
        className="food-form-closed__container"
      >
        <p>FoodForm</p>
      </div>
    );
  }
}

export default FoodForm;