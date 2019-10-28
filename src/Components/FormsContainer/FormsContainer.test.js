import React from 'react';
import { shallow } from 'enzyme';
import FormsContainer from './FormsContainer';

describe('FormsContainer', () => {

 it("should match the wrapper with data passed in", () => {
   const wrapper = shallow(<FormsContainer />);
   expect(wrapper).toMatchSnapshot();
 });
});