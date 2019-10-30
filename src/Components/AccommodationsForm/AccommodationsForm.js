import React, { useState, useContext } from "react";
import "./AccommodationsForm.scss";
import { FormContext } from "../../Contexts/FormContext";
import accommodationSvg from "../../Images/accommodation-pin.svg";
import { createStateObject, createCheckBoxNames } from "../../util/dataCleaner";

const AccommodationsForm = ({
  collapseForm,
  openForm,
  defaultForm,
  formObject
}) => {
  const { formState, setFormState } = useContext(FormContext);
  const stateObject = createStateObject(formObject);
  const checkboxNames = createCheckBoxNames(formObject);

  const [form, toggleClicked] = useState({ ...stateObject });

  const handleCheckBox = e => {
    toggleClicked({ ...form, [e.target.value]: !form[e.target.value] });
    const formattedName = e.target.name.toLowerCase();
    if (e.target.checked) {
      const checkedArray = formState.accommodations[formattedName];
      setFormState({
        ...formState,
        selectedCategories: formState.selectedCategories.concat(checkedArray)
      });
    } else {
      const filteredState = formState.selectedCategories.length
        ? formState.selectedCategories.filter(
            object => object.category !== formattedName
          )
        : [];
      setFormState({ ...formState, selectedCategories: filteredState });
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

  if (openForm.AccommodationsForm) {
    return (
      <div className="form__container">
        <p>- Accommodations -</p>
        <div className="checkbox__container">{checkBoxes}</div>
      </div>
    );
  } else {
    return (
      <div
        onClick={e =>
          collapseForm({
            ...defaultForm,
            AccommodationsForm: !openForm.AccommodationsForm
          })
        }
        className="form-closed__container"
      >
        <img alt="accommodations" src={accommodationSvg}></img>
        <p>- Accommodations -</p>
      </div>
    );
  }
};

export default AccommodationsForm;
