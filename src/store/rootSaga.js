import { all } from 'redux-saga/effects';
import { signUpWatcher } from './SignUp/SignUpSaga';
import { loginWatcher } from './User/UserSaga';

export function* rootSaga() {
  yield all([signUpWatcher(), loginWatcher()]);
}
