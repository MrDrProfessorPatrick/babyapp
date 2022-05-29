import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAccessToken } from './services/fetchAccessToken';
import { fetchUserDetails } from './services/fetchUserDetails';
import { MainPage } from './components/MainPage';
import { GoodsPage } from './components/GoodsPage';
import { GoodPageFull } from './components/GoodPageFull';
import { Login } from './components/Auth/Login';
import { SignUp } from './components/Auth/SignUp';
import { UserPage } from './components/UserPage/UserPage';
import './style.css';

function App() {
  const authTableState = useSelector((state) => state.AuthWindowStateReducer.isVisible);
  const accessToken = useSelector((state) => state.UserReducer.acessToken);

  useEffect(() => {
    console.log('useEffect inside APP works');
    if (!accessToken) fetchAccessToken();
    if (accessToken) fetchUserDetails(accessToken);
  }, []);

  return (
    <div className='App'>
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

export default App;
