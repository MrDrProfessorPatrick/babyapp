const axios = require('axios');

export async function fetchAccessToken() {
  await axios.post(
    'http://localhost:5000/auth/getaccesstoken',
    {},
    {
      withCredentials: true, // need to send cookies to server to get access token
      accessControlAllowCredentials: true,
    }
  );
}
