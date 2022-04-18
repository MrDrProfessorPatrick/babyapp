import { applyMiddleware, combineReducers, createStore } from 'redux';
import { AuthWindowStateReducer } from './AuthWindow/AuthWindowReducer';

const reducers = combineReducers({
  AuthWindowStateReducer,
});

export const store = createStore(reducers);
