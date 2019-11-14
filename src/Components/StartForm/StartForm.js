import React, { useState, useContext } from 'react';
import './StartForm.scss';
import { FormContext } from '../../Contexts/FormContext';
import { getStartAndEnd } from '../../util/apiCalls';
import { rawDataTwo } from '../../util/jsonData';
import { stringToFloatsArray } from '../../util/dataCleaner';
import { cleanData, assignObjectToArrays, cleanYelpResponse, objectifyArray } from '../../util/dataCleaner';

const StartForm = ({ collapseForm, openForm, defaultForm }) => {
  const { formState, setFormState } = useContext(FormContext);
  const [cities, enterCities] = useState({
    origin: "",
    destination: "",
    error: ""
  });
  const { distance } = formState;
  const { origin, destination } = cities;
  const toggleButtonClass = !origin || !destination ? 'disabled' : 'enabled';

  const updateCities = e => {
    enterCities({ ...cities, [e.target.name]: e.target.value });
    setFormState({...formState, [e.target.name + 'City']: e.target.value})
  };

  const assignContext = (arrays, origin, destination, id, distance) => {
    const objectArrays = arrays.map(array => objectifyArray(array));
    localStorage.setItem('response', JSON.stringify(objectArrays));
    setFormState({ 
      ...formState, 
      origin,
      destination,
      distance,
      accommodations: objectArrays[0],
      attractions: objectArrays[1],
      food: objectArrays[2],
      drinks: objectArrays[3],
      services: objectArrays[4],
      miscellaneous: objectArrays[5],
      trip_id: id,
      isLoading: false,
      loadingArray: [false] 
    });
  }

  const handleData = (data, origin, destination, id, distance) => {
    const preliminaryData = cleanData(data).flat();
    const cleanPreliminaryData = preliminaryData.map(datum => cleanYelpResponse(datum));
    const sortedArrays = assignObjectToArrays(cleanPreliminaryData);
    assignContext(sortedArrays, origin, destination, id, distance);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { origin: originCity, destination: destinationCity } = cities;
      setFormState({
        ...formState, 
        isLoading: true, 
        loadingArray: [true] 
      });
      const { id: user_id } = formState;
      const returnedPoints = await getStartAndEnd(originCity, destinationCity, user_id);
      console.log(returnedPoints)
      const { origin, destination, id, distance } = returnedPoints.trip;
      const originArray = stringToFloatsArray(origin);
      const destinationArray = stringToFloatsArray(destination);
      const formattedOrigin = { lat: originArray[0], lng: originArray[1] };
      const formattedDestination = { lat: destinationArray[0], lng: destinationArray[1] };
      let timeout = setTimeout(() => {
        handleData(rawDataTwo, formattedOrigin, formattedDestination, id, distance);
        clearTimeout(timeout);
      }, 12500);
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
        <p>{`${origin} to ${destination}`}</p>
        <p>{distance}</p>
      </div>
    );
  }
};

export default StartForm;
