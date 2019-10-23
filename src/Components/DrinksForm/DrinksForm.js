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
    let name = checkBox.replace(/-|\s/gi, '');
    return (
      <div 
        key={name}
        className='individual-checkbox__container'
      >   
      <input 
        className='drink__checkbox'
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
        className='drink-form-closed__container'
        onClick={e => 
          collapseForm({
            ...defaultForm,
            DrinkForm: !openForm.DrinkForm
        })
      }
      >
        <p>DrinkForm</p>
      </div>
    );
  }
}

export default DrinksForm;