import { SIGN_UP_STATE } from './SignUpAT';

const initialState = {
  isSigned: false,
};

export const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_STATE:
      return {
        ...state,
        isSigned: true,
      };
    default:
      return state;
  }
};
