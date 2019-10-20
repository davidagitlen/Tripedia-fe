import React from 'react';
import './AttractionsForm.scss';

const AttractionsForm = () => {
  let mockProps = ['Dinosaur Bones', 'Candy Factory', 'Gator Farm', 'Spooky Tours', 'Dead People', 'Big Gourds', 'Large Balls of Yarn', 'Tchochkes', 'Natural Holes', 'Unnatural Holes']
  const checkBoxes = mockProps.map(checkBox => {
    return (
      <div className='individual-checkbox__container'>
        <input className='attraction__checkbox' type='checkbox' value={checkBox}></input>
        <label>{checkBox}</label>
      </div>
    )
  })
  return(
   <div className='attraction-form__container'>
    <h2>- Attractions -</h2>
      <div className='checkbox__container'>
        {checkBoxes}
      </div>
   </div>
  )
};

export default AttractionsForm; 