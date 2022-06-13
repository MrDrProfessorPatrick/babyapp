import {
  CHANGE_ISVERIFIED_STATE,
  CHANGE_ROLE_STATE,
  LOGIN,
  GET_USER_DETAILS_REQUEST,
  SET_ISLOGGED,
  SET_ID,
  SET_NAME,
  SET_EMAIL,
  SET_PHONE,
  ADD_ACCESS_TOKEN,
} from './UserAT';

export const isVerifiedChangeStateAC = (payload) => ({
  type: CHANGE_ISVERIFIED_STATE,
  payload,
});

export const setRoleStateAC = (payload) => ({
  type: CHANGE_ROLE_STATE,
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

export const SetUserIdAC = (userId) => ({
  type: SET_ID,
  payload: userId,
});

export const SetNameAC = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const SetEmailAC = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const SetPhoneAC = (phone) => ({
  type: SET_PHONE,
  payload: phone,
});

export const GetUserDetailsRequest = (payload) => ({
  type: GET_USER_DETAILS_REQUEST,
  payload,
});
