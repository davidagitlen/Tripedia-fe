import React from 'react';
import { Route } from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import FormsContainer from '../FormsContainer/FormsContainer';
import './App.scss';
import Map from '../Map/Map';
import LoginForm from '../LoginForm/LoginForm';
import CreateAccount from '../CreateAccount/CreateAccount'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/' render={() =>
        <div className='map-form__container'>
          <FormsContainer />
          <div className='map-container'>
            <Map
              center={{ lat: 39.7392, lng: -104.9903 }}
              zoom={11}
            />

          </div>

        </div>} />
      <Route exact path='/login' render={() => <LoginForm />} />
      <Route exact path='/create_account' render={() => <CreateAccount />} />
    </div>
  );
}

export default App;