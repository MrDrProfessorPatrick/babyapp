import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
// import jwt from 'jsonwebtoken';

import { NavbarPanel } from '../NavbarPanel';
import classes from './UserPage.module.scss';

export function UserPage() {
  const isAdmin = useSelector((state) => state.UserReducer.isAdmin);
  const token = useSelector((state) => state.UserReducer.accessToken);
  let username = localStorage.getItem('username');
  console.log('body', JSON.stringify({ username: username }));

  useEffect(() => {}, []);

  return (
    <>
      <NavbarPanel />
      <div className={classes.contactDetails}>
        <p>Ваше имя: {username} </p>
        <p>Email </p>
        <p>Телефон </p>

        {isAdmin && <Button>Admin mode</Button>}
      </div>
    </>
  );
}
