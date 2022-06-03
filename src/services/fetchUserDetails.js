const axios = require('axios');

export async function fetchUserDetails(token) {
  return await axios('http://localhost:5000/auth/currentuser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer: ${token}`,
    },
    body: JSON.stringify({ token }),
  })
    .then((user) => {
      console.log(user.data);
      return user.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
