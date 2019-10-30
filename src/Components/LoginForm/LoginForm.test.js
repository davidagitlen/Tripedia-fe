import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
 
 it("should match the wrapper with data passed in", () => {
   const wrapper = shallow(<LoginForm />);
   expect(wrapper).toMatchSnapshot();
 });
});