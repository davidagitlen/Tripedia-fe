import React, { useState, useContext } from 'react';
import './ServicesForm.scss';
import { FormContext } from '../../Contexts/FormContext';

const ServicesForm = ({ collapseForm, openForm, defaultForm }) => {
  const { formState, setFormState } = useContext(FormContext);
  console.log('servicesForm', formState);

  const [form, toggleClicked] = useState({
    GasStation: false,
    Hospital: false,
    Mechanic: false,
    GroceryStore: false,
    RestStop: false
  });

  let mockProps = [
    "Gas Station",
    "Hospital",
    "Mechanic",
    "Grocery Store",
    "Rest Stop"
  ];

  const checkBoxes = mockProps.map(checkBox => {
    let name = checkBox.replace(/ /gi, "");
    return (
      <div key={name} className="individual-checkbox__container">
        <input
          className="checkbox"
          type="checkbox"
          value={name}
          checked={form[name]}
          onChange={e =>
            toggleClicked({
              ...form,
              [e.target.value]: !form[e.target.value]
            })
          }
        />
        <label>{checkBox}</label>
      </div>
    );
  });
  if (openForm.ServicesForm) {
    return (
      <div className="form__container">
        <p>- Services -</p>
        <div className="checkbox__container">{checkBoxes}</div>
      </div>
    );
  } else {
    return (
      <div
        className="form-closed__container"
        onClick={e =>
          collapseForm({
            ...defaultForm,
            ServicesForm: !openForm.ServicesForm
          })
        }
      >
        <p>- ServicesForm -</p>
      </div>
    );
  }
};

export default ServicesForm;
