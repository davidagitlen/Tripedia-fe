import React from 'react';
import ReactDOM from 'react-dom';
import { App }from './App';

describe('App', () => {
  it('should match the wrapper with data passed in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
