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

// FormsContainer test:
// import FormsContainer from './FormsContainer';
// import React from "react";
// import ReactDOM from "react-dom";
// import { act } from "react-dom/test-utils";

// let container;

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });

// it("can render a component on click", () => {

//   act(() => {
//     ReactDOM.render(<FormsContainer />, container);
//   });

//   const button = container.querySelector('button');

//   expect(document.body).toBe({ AccommodationsForm: false });

//   act(() => {
//     button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });
//   expect(document.body).toBe({ AccommodationsForm: true });
// });

// LoginForm tests:
// import React from 'react';
// import { shallow } from 'enzyme';
// import LoginForm from './LoginForm';

// describe('LoginForm', () => {

//   it("should match the wrapper with data passed in", () => {
//     const wrapper = shallow(<LoginForm />);
//     expect(wrapper).toMatchSnapshot();
//   });
// });

// // import React from "react";
// // import ReactDOM from "react-dom";
// // import { act } from "react-dom/test-utils";
// // import Counter from "./Counter";

// // let container;

// // beforeEach(() => {
// //   container = document.createElement("div");
// //   document.body.appendChild(container);
// // });

// // afterEach(() => {
// //   document.body.removeChild(container);
// //   container = null;
// // });

// // it("can render and update an input", () => {
// //   
// //   act(() => {
// //     ReactDOM.render(<LoginForm />, container);
// //   });

// //   const input = container.querySelector('input');
// //   // second test: const button = container.querySelector('button');
// //   
// //   expect(input.textContent).toBe('');
// //  
// //   // second test: act(() => {
// //     button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
// //   });
// //   expect(label.textContent).toBe("You clicked 1 times");
// //   // second test: expect(document.title).toBe("You clicked 1 times");
// // });


// Previous:
// describe('LoginForm', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<LoginForm />);
//   });

//   it("should match the wrapper with data passed in", () => {

//     expect(wrapper).toMatchSnapshot();
//   });

//   it("should change the state on the input change within the form", () => {
//     wrapper
//       .find("input")
//       .at(0)
//       .simulate("change", {
//         target: { value: "joanclarke@turing.io", name: "email" }
//       });
//     wrapper
//       .find("input")
//       .at(1)
//       .simulate("change", { target: { value: "freedom", name: "password" } });

//     expect(wrapper.state("email")).toEqual("joanclarke@turing.io");
//     expect(wrapper.state("password")).toEqual("freedom");
//   });
// });