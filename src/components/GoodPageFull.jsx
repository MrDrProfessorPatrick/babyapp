import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import mainImg from '../assets/1.png';
import secondImg from '../assets/pixels_baby.jpg';
import { instPhotos } from '../mocks/cardsData';
import { DetailedDescription } from './DetailedDescription';
import { LeaveCommentSection } from './LeaveCommentSection';
import { Auth } from './Auth/Auth';

export function GoodPageFull({ authTableState, setAuthTableState }) {
  const [bigImage, setBigImage] = useState(mainImg);
  const [descriptionIsOn, setDescriptionIsOn] = useState(true);

  function descriptionReviewsToggle(e) {
    let div = e.target.closest('div');
    let buttons = div.querySelectorAll('button');
    if (e.target.classList.contains('on')) return;

    buttons.forEach((button) => {
      button.classList.remove('on');
    });

    e.target.classList.toggle('on');
    setDescriptionIsOn((prev) => {
      return !prev;
    });
  }

  return (
    <>
      <div className='containerGoodPageFull'>
        {authTableState && <Auth setAuthTableState={setAuthTableState} />}
        <div className='photosWithDescription'>
          <div className='imagesSection'>
            <div className='bigImage'>
              <img src={bigImage} alt='' />
            </div>
            <div className='smallImages'>
              {instPhotos.map((photo) => {
                return (
                  <a
                    onClick={() => {
                      setBigImage(photo);
                    }}
                  >
                    <img src={photo} alt='' />
                  </a>
                );
              })}
            </div>
          </div>

          <div className='description_and_reviews_buttons'>
            <button
              onClick={(e) => {
                descriptionReviewsToggle(e);
              }}
              className='switchDescription on'
            >
              Описание
            </button>
            <button
              onClick={(e) => {
                descriptionReviewsToggle(e);
              }}
              className='switchReviews'
            >
              Оставить Отзыв
            </button>
          </div>
          {descriptionIsOn ? <DetailedDescription /> : <LeaveCommentSection />}
        </div>
        <div className='product_menu_right_column_container'>
          <div className='product_menu_right_column'>
            <div className='product_menu_header_and_articul'>
              <div className='product_menu_header'>
                <h1>Название и краткое описание товара</h1>
              </div>
              <div className='product_menu_articul'>
                <span>Articul</span>
                <span>X-1834826</span>
              </div>
            </div>
            <div className='price_and_buttons_container'>
              <div className='price_section'>1999 грн</div>
              <div className='buy_buttons_sections'>
                <Button>Купить</Button>
                <Button>Быстрый заказ</Button>
              </div>
              <div className='commetn_availability_section'>
                <span>В наличии</span> <br />
                <span>Оставить отзыв</span>
              </div>
            </div>
            <div className='charackteristicks'>
              <span>Характеристики :</span> <br />
              <span>Съёмные наволочки: Да</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
