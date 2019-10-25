const path = process.env.REACT_APP_BACKEND_URL;

export const createAccount = async (name, email, password, password_confirmation) => {
      const url = path + '/api/v1/users';
      const options = {
       method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        })
      };
      const response = await fetch(url, options);
      const newUser = await response.json();
      return newUser;
};

export const loginUser = async (email, password) => {
    const url = path + '/api/v1/users';
    const options = {
      method: 'GET',
      body: JSON.stringify({
        email: email,
        password: password
      })
    };
    const response = await fetch(url, options);
    const user = await response.json();
    return user;
}
