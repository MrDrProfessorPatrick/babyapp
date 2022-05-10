import { SIGN_UP_STATE } from './SignUpAT';

export const isSignedUpStateChange = (userInfo) => ({
  type: SIGN_UP_STATE,
  payload: userInfo,
});
