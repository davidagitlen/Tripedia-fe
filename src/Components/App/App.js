import React, { useMemo, useState } from 'react';
import { Route } from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import FormsContainer from '../FormsContainer/FormsContainer';
import './App.scss';
import Map from '../Map/Map';
import LoginForm from '../LoginForm/LoginForm';
import CreateAccount from '../CreateAccount/CreateAccount';

import { LoadingContext } from '../../Contexts/LoadingContext';


function App() {
  const [isLoadingState, setLoadingContext] = useState({categories: 'Blah blah blah', isLoading: false});
  const contextState = useMemo(() => ({ isLoadingState, setLoadingContext }), [
    isLoadingState,
    setLoadingContext
  ]);
  const {isLoading} = isLoadingState;

  if(!isLoading) {
    return (
      <LoadingContext.Provider value={contextState}>
        <div>
          <Route exact path='/login' render={() => <LoginForm />} />
          <Route exact path='/create_account' render={() => <CreateAccount />} /> 
          <Route exact path='/' render={() =>
            <div className="nav_banner">
              <Navigation />
              <div className='map-form__container'>
                <FormsContainer />
                <div className='map-container'>
                  <Map
                    center={{ lat: 39.7392, lng:  -104.9903 }}
                    zoom={11}
                  />
                </div>
              </div>
            </div> 
            }/>
        </div>
      </LoadingContext.Provider>
    );
  } else {
    return (
      <LoadingContext.Provider value={contextState}>
          <div>
          <Route exact path='/login' render={() => <LoginForm />} />
          <Route exact path='/create_account' render={() => <CreateAccount />} /> 
          <Route exact path='/' render={() =>
            <div className="nav_banner">
              <Navigation />
              <div className='map-form__container'>
                <FormsContainer />
                <div className='map-container'>
                  <Map
                    center={{ lat: 39.7392, lng:  -104.9903 }}
                    zoom={11}
                  />
                </div>
              </div>
            </div> 
            }/>
        </div>
        <div className="app-is-loading">
        <div></div>
        </div>
      </LoadingContext.Provider>
    )
  }
}

export default App;