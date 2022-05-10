import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { isSignedUpStateChange } from '../../store/SignUp/SignUpAC';
import { signUpRequest } from '../../services/signUpRequest';
import { Buffer } from 'buffer';

import classes from './Auth.module.scss';

export function SignUp() {
  const dispatch = useDispatch();
  let emailRef = useRef();
  let phoneRef = useRef();
  let userNameRef = useRef();
  let passwordRef = useRef();
  let url = 'http://localhost:5000/auth/registration';
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      setError('');
      setLoading(true);
      dispatch(isSignedUpStateChange({ url, user }));
      // signUpRequest(url, user);

      // history('/auth/registration');
    } catch (error) {
      console.log('error', error);
      console.log(passwordRef.current.value, 'password');
      setError('Account or password is not correct');
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body className={classes.cardbody}>
          <h2 className='text-center mb-4'> Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='username'>
              <Form.Label> User name </Form.Label>
              <Form.Control type='text' ref={userNameRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label> Email (не обязательно)</Form.Label>
              <Form.Control type='email' ref={emailRef}></Form.Control>
            </Form.Group>
            <Form.Group id='phone'>
              <Form.Label> Phone number</Form.Label>
              <Form.Control type='phone' ref={phoneRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label> Password </Form.Label>
              <Form.Control type='password' ref={passwordRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label> Repeat password </Form.Label>
              <Form.Control type='password' required></Form.Control>
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Sign Up
            </Button>
          </Form>
          <div className='w-100 text-center mt-2'>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
          <div className='w-100 text-center mt-2'>
            Don't have an account? <Link to='/signup'>Sign up </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
