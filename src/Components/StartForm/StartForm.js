import React, { useState } from 'react';
import './StartForm.scss';

const StartForm = ({ collapseForm, openForm, defaultForm}) => {
  
  const [cities, enterCities] = useState({
    origin: '',
    destination: ''
  });

  const {origin, destination} = cities
  const toggleButtonClass = !origin || !destination ? 'disabled':'enabled'

  const updateCities = e => {
    enterCities({...cities, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    const pointsToSend = {...cities}
    console.log('start and end for BE', pointsToSend)
  }

  if(openForm.StartForm) {
    return(
      <form className='start-form__container'>
        <p className='start-form__header'>Start Your Journey</p>
        <input 
          type='text' 
          name='origin'
          value={cities.origin}
          placeholder='Origin, State'
          onChange={ e => updateCities(e)}
        />
        <input 
          type='text' 
          name='destination'
          value={cities.destination}
          placeholder='Destination, State'
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