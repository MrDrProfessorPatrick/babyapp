import { setCookie } from './setCookies';

export function logoutRequest() {
  console.log('logout request works');
  setCookie('refreshToken', '', {
    'max-age': -1,
  });
  window.location.reload();
}
