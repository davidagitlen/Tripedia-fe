import React, { useState, useContext } from 'react';
import './StartForm.scss';
import { FormContext } from '../../Contexts/FormContext';
import { UserContext } from '../../Contexts/UserContext';
import { LoadingContext } from '../../Contexts/LoadingContext';
import { getStartAndEnd } from '../../util/apiCalls';
import { rawData } from '../../util/jsonData';
import { cleanData, assignObjectToArrays, cleanYelpResponse } from '../../util/dataCleaner';

const StartForm = ({ collapseForm, openForm, defaultForm }) => {
  const { formState, setFormState } = useContext(FormContext);
  const { isLoadingState, setLoadingContext } = useContext(LoadingContext);
  const { user } = useContext(UserContext);
  const [cities, enterCities] = useState({
    origin: "",
    destination: "",
    error: ""
  });

  const {origin, destination} = cities;
  const { isLoading } = isLoadingState;
  const toggleButtonClass = !origin || !destination ? 'disabled':'enabled'
  const updateCities = e => {
    enterCities({ ...cities, [e.target.name]: e.target.value });
  };

  const assignContext = (arrays, origin, destination) => {
    const objectArrays = arrays.map(array => objectifyArray(array));
    localStorage.setItem('response', JSON.stringify(objectArrays));
    setFormState({ 
      ...formState, 
      origin,
      destination,
      accommodations: objectArrays[0],
      attractions: objectArrays[1],
      food: objectArrays[2],
      drinks: objectArrays[3],
      services: objectArrays[4],
      miscellaneous: objectArrays[5]
    });
  }

  const objectifyArray = array => {
    const finalObject = array.reduce((finalObject, obj) => {
      if (!finalObject[obj.category]) {
        finalObject[obj.category] = [];
      }
      finalObject[obj.category].push(obj);
      return finalObject;
    }, {});
    return finalObject;
  }

  const handleData = (data, origin, destination) => {
    const preliminaryData = cleanData(data).flat();
    const cleanPreliminaryData = preliminaryData.map(datum => cleanYelpResponse(datum));
    const sortedArrays = assignObjectToArrays(cleanPreliminaryData);
    assignContext(sortedArrays, origin, destination);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { origin: originCity, destination: destinationCity } = cities;
      setLoadingContext({ isLoading: true});
      const { id } = user;
      const returnedPoints = await getStartAndEnd(originCity, destinationCity, id);
      const { origin, destination } = returnedPoints.trip;
      handleData(returnedPoints, origin, destination);
      setLoadingContext({ isLoading: false});
    } catch ({ message }) {
      enterCities({ ...cities, error: message })
    }
  };

  if (openForm.StartForm) {
    return (
      <form className="start-form__container">
        <p className="start-form__header">Start Your Journey</p>
        <input
          type="text"
          name="origin"
          value={cities.origin}
          placeholder="City, State"
          onChange={e => updateCities(e)}
        />
        <input
          type="text"
          name="destination"
          value={cities.destination}
          placeholder="City, State"
          onChange={e => updateCities(e)}
        />
        <button className={toggleButtonClass} onClick={handleSubmit}>
          Create Trip
        </button>
      </form>
    );
  } else {
    return (
      <div
        onClick={e =>
          collapseForm({ ...defaultForm, StartForm: !openForm.StartForm })
        }
        className="start-form-closed__container"
      >
        <p>{`${cities.origin} to ${cities.destination}`}</p>
        {/* <p>290.1 mi</p> */}
      </div>
    );
  }
};

export default StartForm;
