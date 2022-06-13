import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { LOGIN_URL } from '../../constants/Links';
import { GET_USER_DETAILS_REQUEST, LOGIN } from './UserAT';
import {
  addAccessToken,
  SetNameAC,
  SetEmailAC,
  SetPhoneAC,
  SetUserIdAC,
  setRoleStateAC,
} from './UserAC';
import { loginRequest } from '../../services/loginRequest';
import { fetchUserDetails } from '../../services/fetchUserDetails';

export function* loginWorker(payload) {
  console.log('loginWorker');
  try {
    console.log('Inside loginWorker ', payload, payload.payload.username, payload.payload.password);
    const token = yield call(loginRequest, [
      LOGIN_URL,
      payload.payload.username,
      payload.payload.password,
    ]);

    yield put(addAccessToken(token.accessToken));
  } catch (error) {
    console.log('error in loginWorker', error);
  }
}

export function* getUserDetailsWorker(payload) {
  if (!payload.payload) return;
  const userDetails = yield call(fetchUserDetails, [payload.payload]);
  yield put(SetNameAC(userDetails.username));
  userDetails._id ? yield put(SetUserIdAC(userDetails._id)) : yield put(SetUserIdAC('No id'));
  userDetails.email ? yield put(SetEmailAC(userDetails.email)) : yield put(SetEmailAC('No email'));
  userDetails.phone ? yield put(SetPhoneAC(userDetails.phone)) : yield put(SetPhoneAC('No phone'));
  userDetails.roles
    ? yield put(setRoleStateAC(userDetails.roles[0]))
    : yield put(setRoleStateAC(''));
}

export function* loginWatcher() {
  yield takeLatest(LOGIN, loginWorker);
  yield takeLatest(GET_USER_DETAILS_REQUEST, getUserDetailsWorker);
}
