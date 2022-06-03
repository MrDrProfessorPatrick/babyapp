import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import classes from './UserPage.module.scss';

export function UserPage() {
  const isAdmin = useSelector((state) => state.UserReducer.isAdmin);
  const token = useSelector((state) => state.UserReducer.accessToken);
  const { name, phone, email } = useSelector((state) => state.UserReducer);

  useEffect(() => {}, []);

  return (
    <>
      <div className={classes.contactDetails}>
        <p>Ваше имя: {name} </p>
        <p>Email : {email} </p>
        <p>Телефон : {phone} </p>
        {isAdmin && <Button>Admin mode</Button>}
      </div>
    </>
  );
}
