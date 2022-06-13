import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import classes from './CardToAddItem.module.scss';

export function CardToAddItem() {
  return (
    <Card className={classes.card}>
      <Button variant='link'>
        <HiOutlinePlusCircle classNmae={classes.plusSign} size={70} />
      </Button>
    </Card>
  );
}
