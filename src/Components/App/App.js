import React, { useMemo, useState, useContext } from "react";
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
import { LoadingContext } from "../../Contexts/LoadingContext";
import { FormContext } from "../../Contexts/FormContext";
import { UserContext } from "../../Contexts/UserContext";
import { triviaFacts } from "../../util/trivia-facts";

export const App = () => {
  const [isLoadingState, setLoadingContext] = useState({ isLoading: false });
  const loadingState = useMemo(() => ({ isLoadingState, setLoadingContext }), [
    isLoadingState,
    setLoadingContext
  ]);
  const [formState, setFormState] = useState({
    origin: "",
    destination: "",
    tripSubmitted: false,
    attractions: {},
    accommodations: {},
    food: {},
    drinks: {},
    services: {},
    miscellaneous: {},
    selectedCategories: []
  });

  const currentForm = useMemo(() => ({ formState, setFormState }), [formState, setFormState]);
  const [user, userLogin] = useState({ email: '', name: '', id: ''});
  const loggedInUser = useMemo(() => ({ user, userLogin }), [ user, userLogin ]);
  const {isLoading} = isLoadingState;

  const selectTriviaFact = triviaArray => {
    let index = Math.floor(Math.random() * triviaArray.length);
    return triviaArray[index];
  };
  

  if (!isLoading) {
    return (
      <FormContext.Provider value={currentForm}>
        <UserContext.Provider value={loggedInUser}>
          <LoadingContext.Provider value={loadingState}>
            <div>
              <Route exact path="/login" render={() => <LoginForm />} />
              <Route
                exact
                path="/create_account"
                render={() => <CreateAccount />}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <div className="nav_banner">
                    <Navigation />
                    <div className="map-form__container">
                      <FormsContainer />
                      <div className="map-container">
                        <Map
                          center={{ lat: 39.7392, lng: -104.9903 }}
                          zoom={11}
                        />
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </LoadingContext.Provider>
        </UserContext.Provider>
      </FormContext.Provider>
    );
  } else {
    return (
      <FormContext.Provider value={currentForm}>
        <UserContext.Provider value={loggedInUser}>
          <LoadingContext.Provider value={loadingState}>
            <div>
              <Route exact path="/login" render={() => <LoginForm />} />
              <Route
                exact
                path="/create_account"
                render={() => <CreateAccount />}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <div className="nav_banner">
                    <Navigation />
                    <div className="map-form__container">
                      <FormsContainer />
                      <div className="map-container">
                        <Map
                          center={{ lat: 39.7392, lng: -104.9903 }}
                          zoom={11}
                        />
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
            <div className="app-is-loading">
              <div className="trivia-box__container">
                <p className="did-you-know__text">
                  While we prepare your trip, did you know:
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
          </LoadingContext.Provider>
        </UserContext.Provider>
      </FormContext.Provider>
    );
  }
};

export default App;
