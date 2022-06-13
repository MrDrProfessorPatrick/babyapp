import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { setCategoriesListAC } from './GoodsAC';
import { GET_CATEGORIES_LIST } from './GoodsAT';
import { fetchGoodsList } from '../../services/fetchGoodsList';

export function* getGoodsListWorker(payload) {
  try {
    yield console.log('getGoodsWorker works');
    const goodsList = yield call(fetchGoodsList);
    yield put(setCategoriesListAC(goodsList.data));
  } catch (error) {
    console.log(error, 'error in getGoodsList Worker');
  }
}

export function* goodsWatcher() {
  yield takeLatest(GET_CATEGORIES_LIST, getGoodsListWorker);
}
