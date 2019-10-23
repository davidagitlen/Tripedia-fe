import React, { useState } from 'react';
import './ServicesForm.scss';

const ServicesForm = ({ collapseForm, openForm, defaultForm }) => {

  const [form, toggleClicked] = useState({
    GasStation: false,
    Hospital: false,
    Mechanic: false,
    GroceryStore: false,
    RestStop: false
  });

  let mockProps = [
    'Gas Station',
    'Hospital',
    'Mechanic',
    'Grocery Store',
    'Rest Stop'
  ];

  const checkBoxes = mockProps.map(checkBox => {
    let name = checkBox.replace(/ /gi, '');
    return (
      <div
        key={name}
        className='individual-checkbox__container'
      >
        <input
          className='services__checkbox'
          type='checkbox'
          value={name}
          checked={form[name]}
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
  if (openForm.ServicesForm) {
    return(
      <div className='services-form__container'>
        <h2>- Services -</h2>
        <div className='checkbox__container'>
          {checkBoxes}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className='services-form-closed__container'
        onClick={e => 
          collapseForm({
            ...defaultForm,
            ServicesForm: !openForm.ServicesForm
          })
        }
      >
        <p>ServicesForm</p>
      </div>
    );
  }
}

export default ServicesForm;