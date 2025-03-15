import React from 'react'
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import ShopSectionApi from './ShopSectionApi';
import ApiBtn from './ApiBtn';

const ShopSectionSide = () => {
  return (
    <div className='w-[1110px] mx-auto'>
      <Header />
      <div className='mt-[190px]'>
        <h1 className='font-[500] text-[55px]'>Магазин</h1>
        <p className='font-[500] text-[17px] mt-[10px]'>Главная — <span className='text-[#909090]'>Магазин</span></p>
      </div>
      <ShopSectionApi />
      <ApiBtn/>
    </div>
  )
}

export default ShopSectionSide;