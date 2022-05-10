import React, { useRef, useAuth, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loginRequest } from '../../services/loginRequest';
import { showAuthFormAC } from '../../store/AuthWindow/AuthWindowAC';
import { isAdminChangeStateAC, SetNameAC, SetEmailAC, SetPhoneAC } from '../../store/User/UserAC';
import classes from './Auth.module.scss';

export function Login() {
  const history = useNavigate();
  let isAdminState = useSelector((state) => state.UserReducer.isAdmin);
  let emailRef = useRef();
  let passwordRef = useRef();
  let url = 'http://localhost:5000/auth/login';

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      setError('');
      setLoading(true);
      loginRequest(url, user);
      history('/userpage');
    } catch {
      setError('Account or password is not correct');
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body className={classes.cardbody}>
          <h2 className='text-center mb-4'>Log In</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label> Email or User name </Form.Label>
              <Form.Control type='text' ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label> Password </Form.Label>
              <Form.Control type='password' ref={passwordRef} required></Form.Control>
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Log In
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
