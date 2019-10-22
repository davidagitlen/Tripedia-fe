import React from 'react';
import './StartForm.scss';

const StartForm = ({ collapseForm, openForm, defaultForm}) => {
  

  if(openForm.StartForm) {
    return(
      <form className='start-form__container'>
        <h2 className='start-form__header'>Start Your Journey</h2>
        <input type='text' placeholder='Start'></input>
        <p>to:</p>
        <input type='text' placeholder='End'></input>
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