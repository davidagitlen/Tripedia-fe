import React, { useState, useContext, useEffect } from "react";
import "./AttractionsForm.scss";
import { FormContext } from "../../Contexts/FormContext";
import attractionSvg from '../../Images/attractions-pin.svg';
import { createStateObject, createCheckBoxNames } from '../../util/dataCleaner';

const AttractionsForm = ({ collapseForm, openForm, defaultForm, formObject}) => {
  const { formState, setFormState } = useContext(FormContext);

  const stateObject = createStateObject(formObject);
  const checkboxNames = createCheckBoxNames(formObject);
  
  const [form, toggleClicked] = useState({...stateObject});

  // const formCategories = Object.keys(formObject);

  // const stateObject = formCategories.reduce((categoryObject, category) => {
  //   const categoryKey = category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  //   categoryObject[categoryKey] = false;
  //   return categoryObject
  // }, {}); 

  // const checkboxNames = formCategories.map(category => category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

  const handleCheckBox = (e) => {
    toggleClicked({ ...form, [e.target.value]: !form[e.target.value] });
    const formattedName = e.target.name.toLowerCase();
    if (e.target.checked) {
      const checkedArray = formState.attractions[formattedName];
      setFormState({ ...formState, selectedCategories: formState.selectedCategories.concat(checkedArray)})
    } else {
      const filteredState = formState.selectedCategories.length ? formState.selectedCategories.filter(object => object.category !== formattedName) : [];
      setFormState({ ...formState, selectedCategories: filteredState })
    }
  };

  const checkBoxes = checkboxNames.map(checkBox => {
    let name = checkBox.replace(/ /gi, "");
    return (
      <div key={name} className="individual-checkbox__container">
        <input
          className="checkbox"
          type="checkbox"
          name={checkBox}
          value={name}
          checked={form[name]}
          onChange={e => handleCheckBox(e)}
        />
        <label>{checkBox}</label>
      </div>
    );
  });

  if (openForm.AttractionsForm) {
    return (
      <div className="form__container">
        <p>- Attractions -</p>
        <div className="checkbox__container">
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
            AttractionsForm: !openForm.AttractionsForm
          })
        }
        className="form-closed__container"
      >
        <img alt="attractions" src={attractionSvg}></img>
        <p>- Attractions -</p>
      </div>
    );
  }
};

export default AttractionsForm;
