import React from 'react';
import './SubmitTripForm.scss';

const SubmitTripForm = ( { collapseForm, openForm, defaultForm } ) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  if (openForm.SubmitForm) {
    return (
      <form className="form__container">
        <button className='submit-trip__button'>
          Create Trip
        </button>
      </form>
    );
  } else {
    return (
      <div
        onClick={e =>
          collapseForm({ ...defaultForm, SubmitForm: !openForm.SubmitForm })
        }
        className="form-closed__container"
      >
      <p>- Complete Trip -</p>
      </div>
    );
  }
}


export default SubmitTripForm;