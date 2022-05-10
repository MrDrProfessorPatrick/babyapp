import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AuthWindowStateReducer } from './AuthWindow/AuthWindowReducer';
import { UserReducer } from './User/UserReducer';
import { rootSaga } from './rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  AuthWindowStateReducer,
  UserReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
