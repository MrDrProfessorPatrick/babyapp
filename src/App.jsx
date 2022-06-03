import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAccessToken } from './services/fetchAccessToken';
import { fetchUserDetails } from './services/fetchUserDetails';
import { addAccessToken, GetUserDetailsRequest } from './store/User/UserAC';
import './style.css';
import { MainContent } from './components/MainContent/MainContent';

function App() {
  const authTableState = useSelector((state) => state.AuthWindowStateReducer.isVisible);
  const { acessToken } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  let fetchData = async () => {
    let { data } = await fetchAccessToken();
    return data;
  };

  useEffect(() => {
    if (!acessToken) {
      console.log('!accessToken', acessToken);
      let newAccessToken = fetchData();
      newAccessToken.then((token) => {
        dispatch(addAccessToken(token));
      });
    }
    if (acessToken) fetchUserDetails(acessToken);
  }, []);

  useEffect(() => {
    console.log('accessToken was CHANGED', acessToken);
    dispatch(GetUserDetailsRequest(acessToken));
  }, [acessToken]);

  return (
    <>
      <MainContent />
    </>
  );
}

export default App;
