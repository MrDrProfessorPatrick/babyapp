const axios = require('axios');

export function fetchAccessToken() {
  return axios
    .post(
      'http://localhost:5000/auth/getaccesstoken',
      {},
      {
        withCredentials: true, // need to send cookies to server to get access token
        accessControlAllowCredentials: true,
      }
    )
    .then((response) => {
      console.log('response', response);
      return response;
    })
    .catch((err) => console.log(err, 'error in fetchin access token'));
}
