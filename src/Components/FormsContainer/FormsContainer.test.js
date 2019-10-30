import React from 'react';
import { shallow } from 'enzyme';
import FormsContainer from './FormsContainer';

describe('FormsContainer', () => {

 it.skip("should match the wrapper with data passed in", () => {
  
  const mockFormState = jest.fn().mockImplementation(() => {
    const accommodations = [];
    const attractions = [];
    const food = [];
    const drinks = [];
    const services = [];
    const miscellaneous = [];
    return {accommodations, attractions, food, drinks, services, miscellaneous}
  })

  const wrapper = shallow(<FormsContainer formState={mockFormState} />);
  expect(wrapper).toMatchSnapshot();
 });
});