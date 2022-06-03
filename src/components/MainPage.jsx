import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MainPageImage } from './ImageMainPage';
import { DropDownPanel } from './DropDownPanel';
import { MainContent } from './MainContent/MainContent';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

import { Auth } from './Auth/Auth';

export let dropDownShown = false;

const DropDownContext = React.createContext(dropDownShown);

export function MainPage() {
  const authTableState = useSelector((state) => state.AuthWindowStateReducer.isVisible);
  return (
    <>
      {authTableState && <Auth />}
      <MainPageImage />
    </>
  );
}
