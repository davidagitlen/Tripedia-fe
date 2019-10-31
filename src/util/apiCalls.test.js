import {
  createAccount,
  loginUser,
  getStartAndEnd,
  getApiKey
} from "../util/apiCalls.js";

describe("get API key", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve("string")
      });
    });
  });
  it("Should call fetch with the correct URL", async () => {
    const key = await getApiKey();
    expect(key).toEqual("string");
  });
});

describe("createAccount", () => {
  let mockResponse, mockData, url, options;
  beforeEach(() => {
    mockData = {
      name: "paul",
      email: "paul@gmail.com",
      password: "123",
      password_confirmation: "123"
    };
    const { name, email, password, password_confirmation } = mockData;
    url =
      process.env.REACT_APP_BACKEND_URL +
      `/api/v1/users?name=${name}&email=${email}&password=${password}&password_confirmation=${password_confirmation}`;
    mockResponse = {
      id: 1,
      name: "paul",
      email: "paul@gmail.com",
      password: "123",
      account_created: true
    };
    options = {
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
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("Should be called with correct URL", async () => {
    const { name, email, password, password_confirmation } = mockData;
    createAccount(name, email, password, password_confirmation);
    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it("Should return an object with user info", async () => {
    const { name, email, password, password_confirmation } = mockData;

    createAccount(name, email, password, password_confirmation);
    expect(await createAccount(url, options)).toEqual(mockResponse);
  });

  it("Should return an object with user info", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: "Incorrect"
      });
    });
    expect(createAccount()).rejects.toEqual(Error("Incorrect"));
  });
});

describe("Login User", () => {
  let mockResponse, mockData, url, options;
  beforeEach(() => {
    mockData = { email: "paul@gmail.com", password: "123" };
    mockResponse = {
      id: 1,
      name: "paul",
      email: "paul@gmail.com",
      logged_in: true
    };
    const { email, password } = mockData;
    url = process.env.REACT_APP_BACKEND_URL + `/api/v1/user_login`;
    options = {
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

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should be called to correct URL", () => {
    const { email, password } = mockData;

    loginUser(email, password);
    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });
  it("Should return an object with user info", async () => {
    const { email, password } = mockData;

    loginUser(email, password);
    expect(await loginUser(url, options)).toEqual(mockResponse);
  });

  it("Should return an object with user info", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: "Incorrect"
      });
    });
    expect(loginUser()).rejects.toEqual(Error("Incorrect"));
  });
});

describe("getStartAndEnd", () => {
  let mockResponse, mockData, url, options;
  beforeEach(() => {
    mockData = { user_id: 1, origin: "Denver", destination: "Taos" };
    mockResponse = {
      origin: { lat: 2, lng: -3 },
      destination: { lat: 4, lng: -5 }
    };
    const { origin, destination, user_id } = mockData;
    url = process.env.REACT_APP_BACKEND_URL + `/api/v1/users/${user_id}/trips`;
    options = {
      method: "POST",
      body: JSON.stringify({
        origin,
        destination
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should be called to correct URL", () => {
    const { origin, destination, user_id } = mockData;

    getStartAndEnd(origin, destination, user_id);
    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });
  it("Should return an object with user info", async () => {
    const { origin, destination, user_id } = mockData;

    getStartAndEnd(origin, destination);
    expect(await getStartAndEnd(url, options)).toEqual(mockResponse);
  });

  it("Should return an object with user info", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: "Incorrect"
      });
    });
    expect(getStartAndEnd()).rejects.toEqual(Error("Incorrect"));
  });
});
