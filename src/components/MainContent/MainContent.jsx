import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { NavbarPanel } from '../NavbarPanel';
import { MainPage } from '../MainPage';
import { GoodsPage } from '../GoodsPage';
import { GoodPageFull } from '../GoodPageFull';
import { Login } from '../Auth/Login';
import { SignUp } from '../Auth/SignUp';
import { UserPage } from '../UserPage/UserPage';

export function MainContent() {
  return (
    <div className='MainContent'>
      <NavbarPanel />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='goods' element={<GoodsPage />} />
        <Route path='good' element={<GoodPageFull />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='userpage' element={<UserPage />} />
      </Routes>
    </div>
  );
}
