import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
const axios = require('axios');
// import { isAdminChangeStateAC } from '../../store/User/UserAC';

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
      localStorage.setItem('username', user);
      localStorage.setItem('userId', token.data.userId);
      return token.data;
    })
    .catch((error) => console.log('Catched error in loginRequest', error.response));
}
