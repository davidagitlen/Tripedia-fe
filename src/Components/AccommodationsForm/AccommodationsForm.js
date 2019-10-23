import React, { useState } from 'react';
import './AccommodationsForm.scss';

const AccommodationsForm = ({ collapseForm, openForm, defaultForm}) => {

  const [form, toggleClicked] = useState({
    Hotels: false,
    Motels: false,
    BedAndBreakfasts: false,
    Resorts: false,
    Campgrounds: false,
    Hostels: false,
    SkiResorts: false
  });

  let mockProps = [
    "Hotels",
    "Motels",
    "Bed and Breakfasts",
    "Resorts",
    "Campgrounds",
    "Hostels",
    "Ski Resorts"
  ];

  const checkBoxes = mockProps.map(checkBox => {
    let name = checkBox.replace(/ /gi, "");
    return (
      <div className="individual-checkbox__container">
        <input
          className="accommodation__checkbox"
          type="checkbox"
          value={name}
          data={form[name]}
          onClick={e =>
            toggleClicked({ ...form, [e.target.value]: !form[e.target.value] })
          }
        />
        <label>{checkBox}</label>
      </div>
    );
  });

  if(openForm.AccommodationsForm) {
    return (
      <div className='accommodations-form__container'>
        <h2>- Accommodations -</h2>
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
            AccommodationsForm: !openForm.AccommodationsForm
          })
        }
        className="accommodations-form-closed__container"
      >
        <p>AccommodationsForm</p>
      </div>
    );
  }
}

export default AccommodationsForm;