import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Auth.module.scss';
import { Login } from './Login';
import { SignUp } from './SignUp';

export function Auth({ setAuthTableState }) {
  const [switchLoginSingUp, setSwitchLoginSingUp] = useState(true);

  let switchLoginButtonOn = classes.switchLoginOn;
  let switchLoginButtonOff = classes.switchLoginOff;

  function loginButtonSwitcher() {
    setSwitchLoginSingUp(!switchLoginSingUp);
  }

  return (
    <>
      <div className={classes.loginTabBackground} onClick={setAuthTableState}></div>
      <div className={classes.login}>
        <div className={classes.switchButtons}>
          <button
            onClick={loginButtonSwitcher}
            className={switchLoginSingUp ? switchLoginButtonOn : switchLoginButtonOff}
          >
            Login
          </button>
          <button
            onClick={loginButtonSwitcher}
            className={switchLoginSingUp ? switchLoginButtonOff : switchLoginButtonOn}
          >
            Sign Up
          </button>
        </div>
        {switchLoginSingUp ? <Login /> : <SignUp />}
      </div>
    </>
  );
}
