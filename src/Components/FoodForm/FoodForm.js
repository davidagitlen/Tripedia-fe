import React, { useState, useContext } from 'react';
import './FoodForm.scss';
import { FormContext } from '../../Contexts/FormContext';

const FoodForm = ({ collapseForm, openForm, defaultForm }) => {
  const { formState, setFormState } = useContext(FormContext);
  console.log('foodform', formState);
  const [form, toggleClicked] = useState({
    Mexican: false,
    Thai: false,
    Chinese: false,
    Japanese: false,
    Vietnamese: false,
    FastFood: false,
    FineDining: false,
    Pizza: false
  });

  let mockProps = [
    'Mexican',
    'Thai',
    'Chinese',
    'Japanese',
    'Vietnamese',
    'Fast Food',
    'Fine Dining',
    'Pizza'
  ];

  const checkBoxes = mockProps.map(checkBox => {
    let name = checkBox.replace(/ /gi, '');
    return (
      <div
        key={name}
        className='individual-checkbox__container'
        >
        <input
          className='food__checkbox'
          type='checkbox'
          value={name}
          checked={form[name]}
          onChange={e => 
            toggleClicked({
              ...form, [e.target.value]: !form[e.target.value]
            })
          }
        />
        <label>{checkBox}</label>
      </div>
    );
  });

  if(openForm.FoodForm) {
    return (
      <div className='food-form__container'>
        <h2>- Food -</h2>
        <div className='checkbox__container'>
          {checkBoxes}
        </div>
      </div>
    );
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
        className='food-form-closed__container'
      >
        <p>FoodForm</p>
      </div>
    );
  }
}

export default FoodForm;