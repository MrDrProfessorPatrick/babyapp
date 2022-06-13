import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MainPageImage } from './ImageMainPage';

import { Auth } from './Auth/Auth';

export let dropDownShown = false;

const DropDownContext = React.createContext(dropDownShown);

export function MainPage({ authTableState, setAuthTableState }) {
  return (
    <>
      {authTableState && <Auth setAuthTableState={setAuthTableState} />}
      <MainPageImage />
    </>
  );
}
