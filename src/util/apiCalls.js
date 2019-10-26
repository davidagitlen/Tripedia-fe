const path = process.env.REACT_APP_BACKEND_URL;

export const createAccount = async (name, email, password, passwordConfirmation) => {
    console.log('in the apicalls createAccount')
      const url = path + `/api/v1/users?name=${name}&email=${email}&password=${password}&password_confirmation=${passwordConfirmation}`;
      const options = {
        method: "POST",
        
        // body: JSON.stringify({
        //   name: name,
        //   email: email,
        //   password: password,
        //   password_confirmation: passwordConfirmation
        // })
      };
      const response = await fetch(url, options);
      console.log('in apiCalls createUser response', response)
      const newUser = await response.json();
      console.log("in apiCalls createUser newUser", newUser);

      return newUser;
};

export const loginUser = async (email, password) => {
    const url = path + '/api/v1/user_login';
    console.log('show me the url',url)
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    console.log('options', options)
    const response = await fetch(url, options);
    console.log('in loginUser apicall response', response)
    const user = await response.json();
    console.log('in loginuser apicall user', user)
    return user;
}
