import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { isAdminChangeStateAC } from '../../store/User/UserAC';

export async function loginRequest(url, user) {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  })
    .then((token) => {
      if (!token.ok) {
        throw new Error('You are not authorized, try to log in');
      }
      return token.json();
    })
    .then((data) => {
      localStorage.setItem('loginToken', data.token);
      localStorage.setItem('username', user.username);
      //   dispatch(isAdminChangeStateAC(true));
    })
    .catch((error) => console.log(error));
}
