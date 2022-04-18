import React from 'react';
import { CardItem } from './CardItem';

export function Cards(arr) {
  return !arr.length ? (
    <div className='cardsContainer'>
      {arr.arr.map((card) => {
        return <CardItem card={card} />;
      })}
    </div>
  ) : (
    <div> No goods available</div>
  );
}
