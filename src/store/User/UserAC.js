import {
  CHANGE_ISVERIFIED_STATE,
  CHANGE_ISADMIN_STATE,
  SET_NAME,
  SET_EMAIL,
  SET_PHONE,
} from './UserAT';

export const isVerifiedChangeStateAC = (payload) => ({
  type: CHANGE_ISVERIFIED_STATE,
  payload,
});

export const isAdminChangeStateAC = (payload) => ({
  type: CHANGE_ISADMIN_STATE,
  payload,
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
