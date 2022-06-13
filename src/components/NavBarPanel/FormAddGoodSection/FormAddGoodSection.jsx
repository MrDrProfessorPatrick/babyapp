import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { setSectionNameList } from '../../../services/setSectionName';
import classes from './FormAddGoodSection.module.scss';

export function FormAddGoodSection({ showGoodAddFrom }) {
  const sectionNameRef = useRef();
  const goodsList = useSelector((state) =>
    state.GoodsReducer.categoriesList.length ? state.GoodsReducer.categoriesList[0].categories : []
  );
  console.log(goodsList, 'goodsList');

  async function handleSubmit(e) {
    e.preventDefault();
    const sectionName = sectionNameRef && sectionNameRef.current.value;
    goodsList.push(sectionName);
    await setSectionNameList(goodsList);
    await showGoodAddFrom(false);
  }

  return (
    <Form className={classes.AddGoodSection} onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Section Name</Form.Label>
        <Form.Control type='text' placeholder='Введи название товара' ref={sectionNameRef} />
      </Form.Group>
      <Button variant='success' type='submit'>
        Подтвердить
      </Button>
      <Button variant='danger' type='button' onClick={showGoodAddFrom}>
        Отменить
      </Button>
    </Form>
  );
}
