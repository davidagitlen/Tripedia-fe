import React, { useState, useContext } from 'react';
import './StartForm.scss';
import { FormContext } from '../../Contexts/FormContext';
import { getStartAndEnd } from '../../util/apiCalls';

const StartForm = ({ collapseForm, openForm, defaultForm}) => {
  const { formState, setFormState } = useContext(FormContext);
  const [cities, enterCities] = useState({
    origin: '',
    destination: '',
    error: ''
  });

  const {origin, destination} = cities
  const toggleButtonClass = !origin || !destination ? 'disabled':'enabled'

  const updateCities = e => {
    enterCities({...cities, [e.target.name]:e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { origin, destination } = cities; 
    // const { origin: originCity, destination: destinationCity } = cities;
    // const returnedPoints = await getStartAndEnd(originCity, destinationCity);
    // const { origin, destination } = returnedPoints; 
      setFormState({...formState, origin, destination });
    } catch ({ message }) {
      enterCities({...cities, error: message})
    }
  }

  if(openForm.StartForm) {
    return(
      <form className='start-form__container'>
        <p className='start-form__header'>Start Your Journey</p>
        <input 
          type='text' 
          name='origin'
          value={cities.origin}
          placeholder='City, State'
          onChange={ e => updateCities(e)}
        />
        <input 
          type='text' 
          name='destination'
          value={cities.destination}
          placeholder='City, State'
          onChange={ e => updateCities(e)}
        />
        <button
          className={toggleButtonClass}
          onClick={handleSubmit}
        >Create Trip
        </button>
      </form>
    )
  } else {
    return (
      <div onClick={(e) => collapseForm({...defaultForm, StartForm: !openForm.StartForm})} className='start-form-closed__container'>
        <p>Chicago to Denver</p>
        <p>290.1 mi</p>
      </div>
    )
  }
}

export default StartForm;