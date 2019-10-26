import React, { useMemo, useState } from 'react';
import { Route } from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import FormsContainer from '../FormsContainer/FormsContainer';
import './App.scss';
import Map from '../Map/Map';
import LoginForm from '../LoginForm/LoginForm';
import CreateAccount from '../CreateAccount/CreateAccount';
import { FormContext } from '../../Contexts/FormContext';
import { UserContext } from '../../Contexts/UserContext';

function App() {
    const [formState, setFormState] = useState({
    origin: '',
    destination: '',
    tripSubmitted: false,
    attractions: [],
    accommodations: [],
    food: [],
    drinks: [],
    services: []
  });
  const currentForm = useMemo(() => ({ formState, setFormState }), [formState, setFormState]);
  const [user, userLogin] = useState({ email: '', password: ''});
  const loggedInUser = useMemo(() => ({ user, userLogin }), [ user, userLogin ]);
  return (
    <FormContext.Provider value={currentForm}>
      <UserContext.Provider value={loggedInUser}>
        <div className="App">
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
                    <Map center={{ lat: 39.7392, lng: -104.9903 }} zoom={11} />
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </UserContext.Provider>
    </FormContext.Provider>
  );
}

export default App;