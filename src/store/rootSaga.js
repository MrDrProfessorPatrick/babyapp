import { all } from 'redux-saga/effects';
import { signUpWatcher } from './SignUp/SignUpSaga';
import { loginWatcher } from './User/UserSaga';
import { goodsWatcher } from './Goods/GoodsSaga';

export function* rootSaga() {
  yield all([signUpWatcher(), loginWatcher(), goodsWatcher()]);
}
