import {
  CHANGE_ISVERIFIED_STATE,
  CHANGE_ISADMIN_STATE,
  SET_NAME,
  SET_EMAIL,
  SET_PHONE,
} from './UserAT';

const initialState = {
  name: '',
  email: '',
  phone: null,
  isVerified: false,
  isAdmin: false,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        name: action.payload,
      };
    case SET_PHONE:
      return {
        ...state,
        name: action.payload,
      };
    case CHANGE_ISVERIFIED_STATE:
      return {
        ...state,
        isVerified: action.payload,
      };
    case CHANGE_ISADMIN_STATE:
      return {
        ...state,
        isAdmin: action.payload,
      };
    default:
      return state;
  }
};
