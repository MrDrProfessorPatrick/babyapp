import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAccessToken } from './services/fetchAccessToken';
import { fetchUserDetails } from './services/fetchUserDetails';
import { getCategoriesListAC } from './store/Goods/GoodsAC';
import { addAccessToken, GetUserDetailsRequest } from './store/User/UserAC';
import { MainContent } from './components/MainContent/MainContent';
import './style.css';

function App() {
  const dispatch = useDispatch();
  const { acessToken } = useSelector((state) => state.UserReducer);

  let fetchData = async () => {
    let { data } = await fetchAccessToken();
    return data;
  };

  useEffect(() => {
    if (!acessToken) {
      let newAccessToken = fetchData();
      newAccessToken.then((token) => {
        dispatch(addAccessToken(token));
      });
    }
    if (acessToken) fetchUserDetails(acessToken);
  }, []);

  useEffect(() => {
    console.log('getCategoriesListAC()');
    dispatch(getCategoriesListAC());
  }, []);

  useEffect(() => {
    dispatch(GetUserDetailsRequest(acessToken));
  }, [acessToken, dispatch]);

  return (
    <>
      <MainContent />
    </>
  );
}

export default App;
