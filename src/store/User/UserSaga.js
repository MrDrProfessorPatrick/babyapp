import { put, call, takeLatest } from 'redux-saga/effects';
import { LOGIN_URL } from '../../constants/Links';
import { GET_USER_DETAILS_REQUEST, LOGIN } from './UserAT';
import { addAccessToken, SetNameAC } from './UserAC';
import { loginRequest } from '../../services/loginRequest';
import { fetchUserDetails } from '../../services/fetchUserDetails';

export function* loginWorker(payload) {
  try {
    console.log('Inside loginWorker ', payload, payload.payload.username, payload.payload.password);
    const token = yield call(loginRequest, [
      LOGIN_URL,
      payload.payload.username,
      payload.payload.password,
    ]);
    yield console.log('token.accessToken', token);
    yield console.log('token in loginWorker', token);
    yield put(addAccessToken(token.accessToken));
    yield put(SetNameAC(payload.payload.username));
    // yield call(isAdminChangeStateAC(payload.isAdmin));
  } catch (error) {
    console.log('error in loginWorker', error);
  }
}

export function* getUserDetailsWorker(payload) {
  yield console.log(payload, 'payload in getUserDetailsWorker');
  const userDetails = yield call(fetchUserDetails, payload.payload);
  yield console.log('userDetails', userDetails);
}

export function* loginWatcher() {
  yield takeLatest(LOGIN, loginWorker);
  yield takeLatest(GET_USER_DETAILS_REQUEST, getUserDetailsWorker);
}
