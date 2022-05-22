import axios from 'axios';

export async function signUpRequest({ url, user }) {
  console.log('signUpRequest args', 'url = ', url, 'user =  ', user);

  let data = await axios.post(url, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: user,
  });
  console.log('signUpRequest', data);
  return data;
}
