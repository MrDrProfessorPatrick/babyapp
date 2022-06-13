import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { NavbarPanel } from '../NavBarPanel/NavbarPanel';
import { MainPage } from '../MainPage';
import { GoodsPage } from '../GoodsPage';
import { GoodPageFull } from '../GoodPageFull';
import { Login } from '../Auth/Login';
import { SignUp } from '../Auth/SignUp';
import { UserPage } from '../UserPage/UserPage';

export function MainContent() {
  const [authTableState, setAuthTableState] = useState(false);

  return (
    <div className='MainContent'>
      <NavbarPanel
        setAuthTableState={() => {
          setAuthTableState((prev) => !prev);
        }}
      />
      <Routes>
        <Route
          path='/'
          element={
            <MainPage
              authTableState={authTableState}
              setAuthTableState={() => {
                setAuthTableState((prev) => !prev);
              }}
            />
          }
        />
        <Route
          path='goods'
          element={
            <GoodsPage
              authTableState={authTableState}
              setAuthTableState={() => {
                setAuthTableState((prev) => !prev);
              }}
            />
          }
        />
        <Route
          path='good'
          element={
            <GoodPageFull
              authTableState={authTableState}
              setAuthTableState={() => {
                setAuthTableState((prev) => !prev);
              }}
            />
          }
        />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='userpage' element={<UserPage />} />
      </Routes>
    </div>
  );
}
