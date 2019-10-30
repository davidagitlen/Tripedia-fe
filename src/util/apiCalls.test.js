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
  it.only("Should call fetch with the correct URL", async () => {
    const key = await getApiKey();
    expect(key).toEqual("string")
  })
})
