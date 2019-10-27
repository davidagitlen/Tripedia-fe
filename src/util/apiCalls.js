
const path = process.env.REACT_APP_BACKEND_URL;

export const createAccount = async (name, email, password, passwordConfirmation) => {
      const url = path + '/api/v1/users';
      const options = {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      };
      const response = await fetch(url, options);
      const newUser = await response.json();
      return newUser;
};

export const loginUser = async (email, password) => {
    const url = path + '/api/v1/user_login';
    const options = {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    const response = await fetch(url, options);
    const user = await response.json();
    return user;
}

export const getStartAndEnd = async (origin, destination) => {
  const url = process.env.REACT_APP_BACKEND_URL + '';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      origin,
      destination
    }),
    headers: {
      'Content-Type' : 'application/json'
    }
  };
  const response = await fetch(url, options);
  const startAndEndPoints = await response.json();
  return startAndEndPoints
}
