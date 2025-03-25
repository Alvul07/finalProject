import React from 'react'
import Header from '../Header';
import ApiBtn from '../Btns/ApiBtn';
import Footer from '../Footer';
import SecondApi from '../Api/SecondApi';
import ErrorBoundary from '../ErrorBoundary';

const ShopSectionSide = () => {
  return (
    <div>
      <div className='w-[1110px] mx-auto'>
        <Header />
        <div className='mt-[190px]'>
          <h1 className='font-[500] text-[55px]'>Магазин</h1>
          <p className='font-[500] text-[17px] mt-[10px]'>Главная — <span className='text-[#909090]'>Магазин</span></p>
        </div>
        <ErrorBoundary>
          <SecondApi />
        </ErrorBoundary>
        <ApiBtn />
      </div>
      <Footer />
    </div>
  )
}

export default ShopSectionSide;