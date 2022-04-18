import React from 'react';
import { Form } from 'react-bootstrap';

export function LeaveCommentSection() {
  return (
    <div className='leaveCommentForm_container'>
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Control className='emailForm' type='email' placeholder='email адрес' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Control className='nickNameForm' type='text' placeholder='Никней или имя' />
        </Form.Group>
        <Form.Group className='mb-3 commentForm' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Ваш комментарий</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}
