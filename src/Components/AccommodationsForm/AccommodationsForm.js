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
    SkiResorts: false,
    GuestHouses: false
  });

  let mockProps = [
    "Hotels",
    "Motels",
    "Bed and Breakfasts",
    "Resorts",
    "Campgrounds",
    "Hostels",
    "Ski Resorts",
    "Guest Houses"
  ];

  const checkBoxes = mockProps.map(checkBox => {
    let name = checkBox.replace(/ /gi, "");
    return (
      <div 
        key={name}
        className="individual-checkbox__container"
      >
        <input
          className="checkbox"
          type="checkbox"
          value={name}
          checked={form[name]}
          onChange={e =>
            toggleClicked({ ...form, [e.target.value]: !form[e.target.value] })
          }
        />
        <label>{checkBox}</label>
      </div>
    );
  });

  if(openForm.AccommodationsForm) {
    return (
      <div className='form__container'>
        <p>- Accommodations -</p>
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
        className="form-closed__container"
      >
        <p>- Accommodations -</p>
      </div>
    );
  }
}

export default AccommodationsForm;