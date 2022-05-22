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

const initialState = {
  name: '',
  email: '',
  phone: null,
  acessToken: '',
  isLogged: false,
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
    case LOGIN:
      return {
        ...state,
        login: true,
      };
    case ADD_ACCESS_TOKEN:
      return {
        ...state,
        acessToken: action.payload,
      };
    case SET_ISLOGGED:
      return {
        ...state,
        isLogged: action.payload,
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
