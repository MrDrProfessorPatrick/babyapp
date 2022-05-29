import { put, call, takeLatest, takeLeading, delay } from 'redux-saga/effects';
import { LOGIN_URL } from '../../constants/Links';
import { LOGIN } from './UserAT';
import { addAccessToken } from './UserAC';
import { loginRequest } from '../../services/loginRequest';

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
    // yield call(isAdminChangeStateAC(payload.isAdmin));
  } catch (error) {
    console.log('error in loginWorker', error);
  }
}

export function* loginWatcher() {
  yield takeLatest(LOGIN, loginWorker);
}
