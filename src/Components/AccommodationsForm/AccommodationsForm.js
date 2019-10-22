import React from 'react';
import './AccommodationsForm.scss';

const AccommodationsForm = ({ collapseForm, openForm, defaultForm}) => {

  if(openForm.AccommodationsForm) {
    return (
      <div className='accommodations-form__container'>
        <p>AccommodationsForm</p>
      </div>
    )
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