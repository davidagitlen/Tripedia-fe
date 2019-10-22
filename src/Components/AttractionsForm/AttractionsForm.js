import React, { useState } from 'react';
import './AttractionsForm.scss';

const AttractionsForm = ({ collapseForm, openForm, defaultForm}) => {
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
      <div className="individual-checkbox__container">
        <input
          className="attraction__checkbox"
          type="checkbox"
          value={name}
          data={form[name]}
          onClick={e =>
            toggleClicked({ ...form, [e.target.value]: !form[e.target.value] })
          }
        ></input>
        <label>{checkBox}</label>
      </div>
    );
  });
  if(openForm.AttractionsForm) {
    return (
      <div className="attraction-form__container">
        <h2>- Attractions -</h2>
        <div className="checkbox__container">{checkBoxes}</div>
      </div>
    );
  } else {
    return (
      <div
        onClick={e =>
          collapseForm({ ...defaultForm, AttractionsForm: !openForm.AttractionsForm })
        }
        className="attraction-form-closed__container"
      >
        <h2>- Attractions -</h2>
      </div>
    );
  }
};

export default AttractionsForm; 