const axios = require('axios');

export async function loginRequest([url, user, password]) {
  console.log('user inside loginRequest ', { username: user, password }, url);
  return await axios
    .post(url, { username: user, password })
    .then((token) => {
      console.log('token', token);
      if (token.statusText !== 'OK') {
        throw new Error('You are not authorized, try again');
      }
      document.cookie = `refreshToken = ${token.data.refreshToken} httpOnly`;
      return token.data;
    })
    .catch((error) => console.log('Catched error in loginRequest', error));
}
