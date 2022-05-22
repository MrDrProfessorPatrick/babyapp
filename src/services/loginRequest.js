import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
const axios = require('axios');
// import { isAdminChangeStateAC } from '../../store/User/UserAC';

export async function loginRequest([url, user, password]) {
  console.log('user inside loginRequest ', { username: user, password }, url);
  return await axios
    .post(url, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: { username: user, password },
    })
    .then((token) => {
      console.log('token', token.data);
      if (token.statusText !== 'OK') {
        throw new Error('You are not authorized, try again');
      }
      document.cookie = `refreshToken = ${token.data.refreshToken} httpOnly`;
      localStorage.setItem('loginToken', token.data.token);
      localStorage.setItem('username', user);
      return token.data;
    })
    .catch((error) => console.log('Catched error in loginRequest', error));
}
