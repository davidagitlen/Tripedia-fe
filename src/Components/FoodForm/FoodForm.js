import React, { useState, useContext } from "react";
import "./FoodForm.scss";
import { FormContext } from "../../Contexts/FormContext";
import foodSvg from '../../Images/food-pin.svg'

const FoodForm = ({ collapseForm, openForm, defaultForm, formObject }) => {
  const { formState, setFormState } = useContext(FormContext);

  const formCategories = Object.keys(formObject);

  const stateObject = formCategories.reduce((categoryObject, category) => {
    const categoryKey = category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    categoryObject[categoryKey] = false;
    return categoryObject
  }, {});

  const [form, toggleClicked] = useState({ ...stateObject });

  const checkboxNames = formCategories.map(category => category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

  const handleCheckBox = (e) => {
    toggleClicked({ ...form, [e.target.value]: !form[e.target.value] });
    const formattedName = e.target.name.toLowerCase();
    if (e.target.checked) {
      const checkedArray = formState.food[formattedName];
      setFormState({ ...formState, selectedCategories: formState.selectedCategories.concat(checkedArray) })
    } else {
      const filteredState = formState.selectedCategories.length ? formState.selectedCategories.filter(object => object.category !== formattedName) : [];
      setFormState({ ...formState, selectedCategories: filteredState })
    }
  };

  const checkBoxes = checkboxNames.map(checkBox => {
    let name = checkBox.replace(/ /gi, "");
    return (
      <div
        key={name}
        className="individual-checkbox__container"
      >
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

  if (openForm.FoodForm) {
    return (
      <div className="form__container">
        <p>- Food -</p>
        <div className="checkbox__container">{checkBoxes}</div>
      </div>
    );
  } else {
    return (
      <div
        onClick={e =>
          collapseForm({
            ...defaultForm,
            FoodForm: !openForm.FoodForm
          })
        }
        className="form-closed__container"
      >
        <img alt="food" src={foodSvg}></img>
        <p>- Food -</p>
      </div>
    );
  }
};

export default FoodForm;
