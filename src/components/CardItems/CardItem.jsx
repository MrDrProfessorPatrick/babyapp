import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './CardItem.module.scss';
import img from '../../assets/placeholderPhoto.PNG';

export function CardItem() {
  const [isShownDescription, setIsShownDescription] = useState(false);

  function showDescription() {
    setIsShownDescription(true);
  }

  function hideDescription(event) {
    if (event.className === 'dropdown') return;
    setIsShownDescription(false);
  }

  return (
    <Card
      onMouseEnter={showDescription}
      onMouseLeave={(e) => hideDescription(e)}
      className={classes.card}
    >
      <Link to='/good'>
        <Card.Img className={classes.cardImg} variant='top' src={img} />
      </Link>
      <Card.Body className={classes.cardBody}>
        <Card.Title>Название товара и краткое описание товара</Card.Title>
        <div className={classes.buttonPrice}>
          <div className={classes.price}>9.99 грн</div>
          <Button variant='outline-success' className={classes.buyBtn}>
            Купить
          </Button>
        </div>
        {isShownDescription && (
          <div className={classes.shortDescription}>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content. Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
