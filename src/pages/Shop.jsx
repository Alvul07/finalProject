import React from 'react'
import Header from '../components/Header';
import ShopSectionOne from '../components/Shop/ShopSectionOne';
import ApiBtn from '../components/Btns/ApiBtn';
import Footer from '../components/Footer';

const Shop = () => {
  return (
    <div>
      <div className='w-[1110px] mx-auto'>
        <Header />
        <div className='mt-[190px]'>
          <h1 className='font-[500] text-[55px]'>Магазин</h1>
          <p className='font-[500] text-[17px] mt-[10px] flex gap-[13px]'>Главная <span>—</span> <span className='text-[#909090]'>Магазин</span></p>
        </div>
        <ShopSectionOne />
        <ApiBtn />
      </div>
      <Footer/>
    </div>
  )
}

export default Shop;

//git add .
//git commit -m "add new page"
//git push