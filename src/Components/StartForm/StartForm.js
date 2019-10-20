import React from 'react';
import './StartForm.scss';

const StartForm = () => {
  
  return(
    <form className='start-form__container'>
      <h2 className='start-form__header'>Start Your Journey</h2>
      <input type='text' placeholder='Start'></input>
      <p>to:</p>
      <input type='text' placeholder='End'></input>
      <button>Create Trip</button>
    </form>
  )
}

export default StartForm;