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

const initialState = {
  userId: '',
  name: '',
  email: '',
  phone: null,
  acessToken: '',
  isLogged: false,
  isVerified: false,
  Role: '',
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        login: true,
      };
    case GET_USER_DETAILS_REQUEST:
      return state;
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
    case CHANGE_ROLE_STATE:
      return {
        ...state,
        Role: action.payload,
      };
    default:
      return state;
  }
};
