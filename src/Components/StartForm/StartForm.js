import React, { useState } from 'react';
import './StartForm.scss';

const StartForm = ({ collapseForm, openForm, defaultForm}) => {
  
  const [cities, enterCities] = useState({
    origin: '',
    destination: ''
  });

  const updateCities = e => {
    enterCities({...cities, [e.target.name]:e.target.value})
  }

  if(openForm.StartForm) {
    return(
      <form className='start-form__container'>
        <h2 className='start-form__header'>Start Your Journey</h2>
        <input 
          type='text' 
          name='origin'
          value={cities.origin}
          placeholder='Start'
          onChange={ e => updateCities(e)}
        />
        <p>to:</p>
        <input 
          type='text' 
          name='destination'
          value={cities.destination}
          placeholder='End'
          onChange={ e => updateCities(e)}
        />
        <button>Create Trip</button>
      </form>
    )
  } else {
    return (
      <div onClick={(e) => collapseForm({...defaultForm, StartForm: !openForm.StartForm})} className='start-form-closed__container'>
        <p>Start to Denver</p>
        <p>290.1 mi</p>
      </div>
    )
  }
}

export default StartForm;