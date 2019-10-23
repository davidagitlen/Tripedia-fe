import React, { useState } from 'react';
import './DrinksForm.scss';

const DrinksForm = ({ collapseForm, openForm, defaultForm}) => {
  const [form, toggleClicked] = useState({
    Cocktails: false,
    Beer: false,
    Wine: false,
    NonAlcoholic: false,
    SodaFactory: false,
    TikiBar: false
  });

  let mockProps = [
    'Cocktails',
    'Beer',
    'Wine',
    'Non-Alcoholic',
    'Soda Factory',
    'Tiki Bar'
  ];

  const checkBoxes = mockProps.map(checkBox => {
    let name = checkBox.replace(/[' ', '-']/gi, '');
    return (
      <div 
      className='individual-checkbox__container'
      >   
      <input 
      className='drink__checkbox'
      type='checkbox'
      value={name}
      data={form[name]}
      onClick={e => 
        toggleClicked({
          ...form, [e.target.value]: !form[e.target.value]
        })
      }
      />
      <label>{checkBox}</label>
      </div>
    );
  });

  if (openForm.DrinkForm) {
    return (
      <div className='drink-form__container'>
        <h2>- Drink -</h2>
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
            DrinkForm:!openForm.DrinkForm
        })
      }
      className='drink-form-closed__container'
      >
        <p>DrinkForm</p>
      </div>
    );
  }
}

export default DrinksForm;