import { CHANGE_AUTH_WINDOW_STATE } from './AuthWindowAT';

export const showAuthFormAC = (payload) => ({
  type: CHANGE_AUTH_WINDOW_STATE,
  payload,
});
