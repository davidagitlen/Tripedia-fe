import React, { useContext } from 'react';
import './SubmitTripForm.scss';
import { FormContext } from '../../Contexts/FormContext';

const SubmitTripForm = () => {
  const { formState, setFormState } = useContext(FormContext);
  console.log('submitTrip', formState);
  return(
    <div className='submit-trip__form'>
      <p>SubmitTripForm</p>
    </div>
  )
}

export default SubmitTripForm;