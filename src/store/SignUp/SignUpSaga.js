import { put, call, takeLatest, takeLeading, delay } from 'redux-saga/effects';
import { signUpRequest } from '../../services/signUpRequest';
import { SIGN_UP_STATE } from './SignUpAT';
import { isSignedUpStateChange } from './SignUpAC';
import { setIsLogged } from '../User/UserAC';

export function* signUpWorker({ payload }) {
  try {
    const data = yield call(signUpRequest, payload);
    yield put(setIsLogged(true));
    console.log('data in signUpWorker', data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function* signUpWatcher() {
  yield takeLatest(SIGN_UP_STATE, signUpWorker);
}
