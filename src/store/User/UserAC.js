import {
  CHANGE_ISVERIFIED_STATE,
  CHANGE_ISADMIN_STATE,
  LOGIN,
  SET_ISLOGGED,
  SET_NAME,
  SET_EMAIL,
  SET_PHONE,
  ADD_ACCESS_TOKEN,
} from './UserAT';

export const isVerifiedChangeStateAC = (payload) => ({
  type: CHANGE_ISVERIFIED_STATE,
  payload,
});

export const isAdminChangeStateAC = (payload) => ({
  type: CHANGE_ISADMIN_STATE,
  payload,
});

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const addAccessToken = (payload) => ({
  type: ADD_ACCESS_TOKEN,
  payload,
});

export const setIsLogged = (isLogged) => ({
  type: SET_ISLOGGED,
  payload: isLogged,
});

export const SetNameAC = (payload) => ({
  type: SET_NAME,
  payload,
});

export const SetEmailAC = (payload) => ({
  type: SET_EMAIL,
  payload,
});

export const SetPhoneAC = (payload) => ({
  type: SET_PHONE,
  payload,
});
