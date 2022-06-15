import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { SignUpReducer } from './SignUp/SignUpReducer';
import { UserReducer } from './User/UserReducer';
import { GoodsReducer } from './Goods/GoodsReducer';
import { rootSaga } from './rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  SignUpReducer,
  UserReducer,
  GoodsReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
