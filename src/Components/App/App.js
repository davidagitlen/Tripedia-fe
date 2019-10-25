import React, { useMemo, useState } from 'react';
import { Route } from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import FormsContainer from '../FormsContainer/FormsContainer';
import './App.scss';
import Map from '../Map/Map';
import LoginForm from '../LoginForm/LoginForm';
import CreateAccount from '../CreateAccount/CreateAccount';

import { CategoriesContext } from '../../Contexts/CategoriesContext';


function App() {
  const [categories, chooseCategories] = useState({categories: 'Blah blah blah'});
  const currentCategories = useMemo(() => ({ categories, chooseCategories }), [categories, chooseCategories]);
  return (
    <CategoriesContext.Provider value={currentCategories}>
      <div className="App">
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
    </CategoriesContext.Provider>
  );
}

export default App;