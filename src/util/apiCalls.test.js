import {createAccount, loginUser, getStartAndEnd, getApiKey} from '../util/apiCalls.js';

describe('get API key', ()=> {
  beforeEach(()=>{
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

  it("Should return an object with user info", async () => {
    const {name, email, password, password_confirmation} = mockData
    mockData = {name: "paul", email: "paul@gmail.com", password: "123",
    password_confirmation: "123"};
    mockResponse = {id: 1, name: "paul", email: "paul@gmail.com", password: "123", account_created: true};
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
    expect(await createAccount(url, options)).toEqual(mockResponse)
  })

  it("Should return an object with user info", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: "Incorrect"
      })
    })
    expect(createAccount()).rejects.toEqual(Error("Incorrect"))
  })
})

describe('Login User', () => {
  let mockResponse, mockData;
  beforeEach(()=>{
    mockData = {email: "paul@gmail.com", password: "123"};
    mockResponse = {id: 1, name: "paul", email: "paul@gmail.com", logged_in: true};
    const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/user_login`;

     window.fetch = jest.fn().mockImplementation(() => {
       return Promise.resolve({
         ok: true,
         json: () => Promise.resolve(mockResponse)
       })
     })
   })

   it.only("should be called to correct URL", () => {
     const {email, password} = mockData
     const url = process.env.REACT_APP_BACKEND_URL + `/api/v1/user_login`;
     const options = {
       method: "POST",
       body: JSON.stringify({
         email: email,
         password: password
       }),
       headers: {
         "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"
       }
     };
     loginUser(email, password);
     expect(window.fetch).toHaveBeenCalledWith(url, options)
   })
})
