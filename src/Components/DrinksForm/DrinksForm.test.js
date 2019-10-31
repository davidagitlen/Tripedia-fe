import React, { createContext } from 'react';
import { shallow, mount} from 'enzyme';
import DrinksForm from './DrinksForm';

describe('DrinksForm', () => {

  it('should mock formContext and match a snapshot', () => {
    const contextValues = {
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
    };
    const FormContext = createContext(contextValues);
    const mockOpenForm = jest.fn();
    const mockCollapseForm = jest.fn();
    const mockDefaultForm = {
      StartForm: false,
      AttractionsForm: false,
      AccommodationsForm: false,
      FoodForm: false,
      DrinksForm: false,
      ServicesForm: false,
      SubmitTripForm: false
    };
    const mockFormObject = {
      ArtGalleries: [],
      WalkingTours: [],
      DayCamps: []
    }
    const wrapper = mount(
      <FormContext.Provider value={contextValues}>
        <DrinksForm
          collapseForm={mockCollapseForm}
          openForm={mockOpenForm}
          defaultForm={mockDefaultForm}
          formObject={mockFormObject}
        />
      </FormContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});