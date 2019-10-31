import {createAccount, loginUser, getStartAndEnd, getApiKey} from '../util/apiCalls.js';

describe('get API key', ()=> {
  // let mockResponse, mockData;
  beforeEach(()=>{
    //  mockData = {name: "paul", email: "paul@gmail.com", password: "123",
    // password_confirmation: "123"};
    //  mockResponse = {id: 1, name: "paul", email: "paul@gmail.com", password: "123", account_created: true};
     window.fetch = jest.fn().mockImplementation(() => {
       return Promise.resolve({
         ok: true,
         json: () => Promise.resolve("string")
       })
     })
  })
  it("Should call fetch with the correct URL", async () => {
    const key = await getApiKey();
    expect(key).toEqual("string")
  })
})
describe('createAccount', () => {
  let mockResponse, mockData;
  beforeEach(()=>{
     mockData = {name: "paul", email: "paul@gmail.com", password: "123",
     password_confirmation: "123"};
     mockResponse = {id: 1, name: "paul", email: "paul@gmail.com", password: "123", account_created: true};
     window.fetch = jest.fn().mockImplementation(() => {
       return Promise.resolve({
         ok: true,
         json: () => Promise.resolve(mockResponse)
       })
     })
  })
  it("Should be called with correct URL", async () => {
    const {name, email, password, password_confirmation} = mockData
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/users?name=${name}&email=${email}&password=${password}&password_confirmation=${password_confirmation}`;
    const options = {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      };
    createAccount(name, email, password, password_confirmation);
    expect(window.fetch).toHaveBeenCalledWith(url, options)
  })
})
