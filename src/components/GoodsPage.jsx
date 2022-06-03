import React from 'react';
import { Cards } from './Cards';
import { NavbarPanel } from './NavbarPanel';
import { goods } from '../mocks/cardsData';
import { GoodsPageMenu } from './GoodsPageMenu';

export function GoodsPage() {
  return (
    <>
      <GoodsPageMenu />
      <div className='goodsPage'>
        <Cards arr={goods} />
      </div>
    </>
  );
}
