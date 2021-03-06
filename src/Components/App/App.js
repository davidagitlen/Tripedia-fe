import React, { useMemo, useState } from "react";
import { Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import FormsContainer from "../FormsContainer/FormsContainer";
import "./App.scss";
import Map from "../Map/Map";
import LoginForm from "../LoginForm/LoginForm";
import CreateAccount from "../CreateAccount/CreateAccount";
import LoadingIcon from "../../Images/loading-icon.svg";
import stopSign from "../../Images/stop-sign.svg";
import trees from "../../Images/trees.svg";
import house from "../../Images/house.svg";
import hotel from "../../Images/hotel.svg";
import city from "../../Images/city.svg";
import { FormContext } from "../../Contexts/FormContext";
import { triviaFacts } from "../../util/trivia-facts";

export const App = () => {
  const [formState, setFormState] = useState({
    origin: '',
    originCity: '',
    destination: '',
    destinationCity: '',
    tripSubmitted: false,
    attractions: {},
    accommodations: {},
    food: {},
    drinks: {},
    services: {},
    miscellaneous: {},
    selectedCategories: [],
    trip_id: '',
    waypoints: [],
    isLoading: false,
    loadingArray: [],
    email: '',
    name: '',
    id: '',
    distance: ''
  });
  const currentForm = useMemo(() => ({ formState, setFormState }), [formState, setFormState]);
  const { isLoading } = formState;

  const selectTriviaFact = triviaArray => {
    let index = Math.floor(Math.random() * triviaArray.length);
    return triviaArray[index];
  };

  if (!isLoading) {
    return (
      <FormContext.Provider value={currentForm}>
        <div>
          <Route exact path="/" render={() => <LoginForm />} />
          <Route
            exact
            path="/create_account"
            render={() => <CreateAccount />}
          />
          <Route
            exact
            path="/map"
            render={() => (
              <div className="nav_banner">
                <Navigation />
                <div className="map-form__container">
                  <FormsContainer />
                  <div className="map-container">
                    <Map
                    />
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </FormContext.Provider>
    );
  } else {
    return (
      <FormContext.Provider value={currentForm}>
        <div>
          <Route exact path="/" render={() => <LoginForm />} />
          <Route
            exact
            path="/create_account"
            render={() => <CreateAccount />}
          />
          <Route
            exact
            path="/map"
            render={() => (
              <div className="nav_banner">
                <Navigation />
                <div className="map-form__container">
                  <FormsContainer />
                  <div className="map-container">
                    <Map />
                  </div>
                </div>
              </div>
            )}
          />
        </div>
        <div className="app-is-loading">
          <div className="trivia-box__container">
            <p className="did-you-know__text">
              Did you know?
            </p>
            <p>{selectTriviaFact(triviaFacts)}</p>
            <div className="animation-container">
              <img
                className="loading__icon"
                alt="loading"
                src={LoadingIcon}
              ></img>
              <img className="stop-sign" alt="loading" src={stopSign}></img>
              <img className="house" alt="loading" src={house}></img>
              <img className="trees" alt="loading" src={trees}></img>
              <img className="trees" alt="loading" src={trees}></img>
              <img className="trees" alt="loading" src={trees}></img>
              <img className="trees" alt="loading" src={trees}></img>
              <img className="trees" alt="loading" src={trees}></img>
              <img className="city" alt="loading" src={city}></img>
              <img className="city" alt="loading" src={city}></img>
              <img className="city2" alt="loading" src={city}></img>
              <img className="city2" alt="loading" src={city}></img>
              <img className="hotel" alt="loading" src={hotel}></img>
              <div className="road"></div>
            </div>
          </div>
        </div>
      </FormContext.Provider>
    );
  }
};

export default App;
