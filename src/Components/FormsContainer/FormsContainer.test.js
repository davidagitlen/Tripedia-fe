import React, { createContext, useContext } from 'react';
import { shallow, mount } from 'enzyme';
import FormsContainer from './FormsContainer';

describe('FormsContainer', () => {

 it.skip("should match the wrapper with data passed in", () => {
  
     const contextValues = {
       formState: {
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
     }
    };
    const FormContext = createContext(contextValues);
    React.useContext = jest.fn().mockImplementation(() => contextValues);
    const wrapper = mount(
      <FormContext.Provider value={contextValues}>
        <FormsContainer />
      </FormContext.Provider>
     );

     expect(wrapper).toMatchSnapshot();
   });
});