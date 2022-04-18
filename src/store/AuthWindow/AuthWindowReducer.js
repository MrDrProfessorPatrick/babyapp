import { CHANGE_AUTH_WINDOW_STATE } from './AuthWindowAT';

const initialState = {
  isVisible: false,
};

export const AuthWindowStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH_WINDOW_STATE:
      return {
        ...state,
        isVisible: action.payload,
      };
    default:
      return state;
  }
};
