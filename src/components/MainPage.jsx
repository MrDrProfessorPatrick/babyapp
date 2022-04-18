import React, { useState } from 'react';
import { NavbarPanel } from './NavbarPanel';
import { MainPageImage } from './ImageMainPage';
import { DropDownPanel } from './DropDownPanel';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from './Auth/Login';

export let dropDownShown = false;

const DropDownContext = React.createContext(dropDownShown);

export function MainPage() {
  const authTableState = useSelector((state) => state.AuthWindowStateReducer.isVisible);
  return (
    <>
      {authTableState && <Login />}
      <NavbarPanel />
      <MainPageImage />
    </>
  );
}
