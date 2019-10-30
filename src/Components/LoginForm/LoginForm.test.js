import React, { ReactTestUtils } from "react";
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';
import { act } from "react-dom/test-utils";

describe('LoginForm', () => {

let wrapper;
let container;

 beforeEach(() => {
   wrapper = shallow(<LoginForm />);
   container = document.createElement("div");
   document.body.appendChild(container);
 });

 afterEach(() => {
   document.body.removeChild(container);
   container = null;
 });
 
 it("should match the wrapper with data passed in", () => {
   
   expect(wrapper).toMatchSnapshot();
 });

 it("can render and update an input", () => {

const input = container.querySelector('input');
console.log(input)
// input.value = '';
// ReactTestUtils.Simulate.change(input.value);
ReactTestUtils.Simulate.onChange(input, { email: "g@g.com"});



//   
//   act(() => {
//     ReactDOM.render(<LoginForm />, container);
//   });

//   const input = container.querySelector('input');
//   // second test: const button = container.querySelector('button');
//   
   expect(input.textContent).toBe("g@g.com");
//  
//   // second test: act(() => {
//     button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   expect(label.textContent).toBe("You clicked 1 times");
//   // second test: expect(document.title).toBe("You clicked 1 times");
 });


});