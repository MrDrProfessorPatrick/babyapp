import React from 'react';
import { Cards } from './Cards/Cards';
import { goods } from '../mocks/cardsData';
import { GoodsPageMenu } from './GoodsPageMenu';
import { Auth } from './Auth/Auth';

export function GoodsPage({ authTableState, setAuthTableState }) {
  return (
    <>
      <GoodsPageMenu />
      <div className='goodsPage'>
        {authTableState && <Auth setAuthTableState={setAuthTableState} />}
        <Cards arr={goods} />
      </div>
    </>
  );
}
