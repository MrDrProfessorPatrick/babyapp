import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';

export function SignUp() {
  let emailRef = useRef();
  let passwordRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

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
      <Card
        className='d-flex align-items-center'
        style={{
          maxWidth: 'auto',
          height: '1000px',
          backgroundColor: '#7575a3',
        }}
      >
        <Card.Body style={{ width: '300px' }}>
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
              <Form.Label> Confirm password </Form.Label>
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
