import React, { useState, useContext } from "react";
import "./AttractionsForm.scss";
import { FormContext } from "../../Contexts/FormContext";

const AttractionsForm = ({ collapseForm, openForm, defaultForm }) => {
  const { formState, setFormState } = useContext(FormContext);
  const [form, toggleClicked] = useState({
    DinosaurBones: false,
    CandyFactory: false,
    GatorFarm: false,
    SpookyTours: false,
    DeadPeople: false,
    BigGourds: false,
    LargeBallsofYarn: false,
    Tchochkes: false,
    NaturalHoles: false,
    UnnaturalHoles: false
  });

  let mockProps = [
    "Dinosaur Bones",
    "Candy Factory",
    "Gator Farm",
    "Spooky Tours",
    "Dead People",
    "Big Gourds",
    "Large Balls of Yarn",
    "Tchochkes",
    "Natural Holes",
    "Unnatural Holes"
  ];

  const checkBoxes = mockProps.map(checkBox => {
    let name = checkBox.replace(/ /gi, "");
    return (
      <div key={name} className="individual-checkbox__container">
        <input
          className="checkbox"
          type="checkbox"
          value={name}
          checked={form[name]}
          onChange={e =>
            toggleClicked({ ...form, [e.target.value]: !form[e.target.value] })
          }
        />
        <label>{checkBox}</label>
      </div>
    );
  });

  if (openForm.AttractionsForm) {
    return (
      <div className="form__container">
        <p>- Attractions -</p>
        <div className="checkbox__container">{checkBoxes}</div>
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
        <p>- Attractions -</p>
      </div>
    );
  }
};

export default AttractionsForm;
