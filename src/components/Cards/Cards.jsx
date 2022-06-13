import React from 'react';
import { CardItem } from '../CardItems/CardItem';
import { CardToAddItem } from '../CardItems/CardToAddItem/CardToAddItem';
import classes from './Cards.module.scss';

export function Cards(arr) {
  return !arr.length ? (
    <div className={classes.cardsContainer}>
      {arr.arr.map((card) => {
        return <CardItem card={card} />;
      })}
      <CardToAddItem />
      <div className={classes.bottomCards}></div>
    </div>
  ) : (
    <div> No goods available</div>
  );
}
