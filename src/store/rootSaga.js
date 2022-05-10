import { all } from 'redux-saga/effects';
import { signUpWatcher } from './SignUp/SignUpSaga';

export function* rootSaga() {
  yield all([signUpWatcher()]);
}
