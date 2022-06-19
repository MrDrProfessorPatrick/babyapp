import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { setCategoriesListAC } from './GoodsAC';
import { GET_CATEGORIES_LIST, LOAD_CATEGORIES_LIST } from './GoodsAT';
import { fetchGoodsList } from '../../services/fetchGoodsList';
import { setSectionNameList } from '../../services/setSectionName';

export function* getGoodsListWorker({ payload }) {
  try {
    yield console.log('getGoodsWorker works', payload);
    const goodsList = yield call(fetchGoodsList);
    console.log(goodsList.data[0].categories, 'goodsList in getGoodsListWorker');
    yield put(setCategoriesListAC(goodsList.data[0].categories));
  } catch (error) {
    console.log(error, 'error in getGoodsList Worker');
  }
}

export function* setGoodListWorker({ payload }) {
  yield console.log('setGoodListWorker', payload);
  yield put(setCategoriesListAC(payload));
  yield call(setSectionNameList, payload);
}

export function* goodsWatcher() {
  yield takeEvery(GET_CATEGORIES_LIST, getGoodsListWorker);
  yield takeEvery(LOAD_CATEGORIES_LIST, setGoodListWorker);
}
