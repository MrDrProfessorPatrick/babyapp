import React, { useRef, useAuth, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { showAuthFormAC } from '../../store/AuthWindow/AuthWindowAC';
import classes from './Auth.module.scss';

export function Login() {
  let emailRef = useRef();
  let passwordRef = useRef();
  const dispatch = useDispatch();
  const history = useNavigate();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [switchLoginSingUp, setSwitchLoginSingUp] = useState(true);

  let switchLoginButtonOn = classes.switchLoginOn;
  let switchLoginButtonOff = classes.switchLoginOff;

  function loginButtonSwitcher() {
    setSwitchLoginSingUp(!switchLoginSingUp);
  }

  function handleCloseLoginTab() {
    dispatch(showAuthFormAC(false));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);

      history('/');
    } catch {
      console.log(passwordRef.current.value, 'password');
      setError('Account or password is not correct');
    }
    setLoading(false);
  }
  return (
    <>
      <div className={classes.loginTabBackground} onClick={handleCloseLoginTab}></div>
      <Card className={classes.login}>
        <div className={classes.switchButtons}>
          <button
            onClick={loginButtonSwitcher}
            className={switchLoginSingUp ? switchLoginButtonOn : switchLoginButtonOff}
          >
            Login
          </button>
          <button
            onClick={loginButtonSwitcher}
            className={switchLoginSingUp ? switchLoginButtonOff : switchLoginButtonOn}
          >
            ignUp
          </button>
        </div>
        <Card.Body className={classes.cardbody}>
          <h2 className='text-center mb-4'>Log In</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label> Email or User name </Form.Label>
              <Form.Control type='email' ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label> Password </Form.Label>
              <Form.Control type='password' ref={passwordRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label> Repeat </Form.Label>
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
