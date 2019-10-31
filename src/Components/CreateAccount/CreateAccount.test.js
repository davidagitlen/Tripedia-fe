import React from 'react';
import { shallow } from 'enzyme';
import CreateAccount from './CreateAccount';

describe('CreateAccount', () => {

  it.skip("should match the wrapper with data passed in", () => {
    const wrapper = shallow(<CreateAccount />);
    expect(wrapper).toMatchSnapshot();
  });
});