import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
// import jwt from 'jsonwebtoken';
import { NavbarPanel } from '../NavbarPanel';
import classes from './UserPage.module.scss';

export function UserPage() {
  const isAdmin = useSelector((state) => state.UserReducer.isAdmin);
  const token = localStorage.getItem('loginToken');
  let username = localStorage.getItem('username');
  console.log('body', JSON.stringify({ username: username }));

  useEffect(() => {
    let token = localStorage.getItem('loginToken');

    fetch('http://localhost:5000/auth/currentuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer: ${token}`,
      },
      body: JSON.stringify({ username: username }),
    })
      .then((user) => {
        console.log(user.json());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
