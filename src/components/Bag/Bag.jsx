import React, { useContext } from 'react'
import Header from '../Header';
import ProductList from './ProductList';
import Footer from '../Footer';
import { CartContext } from './ProductAdd';

const Bag = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <div className='w-[1110px] mx-auto'>
        <Header />
        <div className='mt-[190px]'>
          <h1 className='text-[55px] font-[500]'>Корзина</h1>
          <p className='text-[17px] font-[500] mt-[20px] flex gap-[13px]'>Главная <span>—</span> <span className='text-[#909090]'>Корзина</span></p>
        </div>
        {cart.length > 0 ?
          <div className="flex text-[20px] font-[500] justify-evenly ml-[80px] mb-[25px] mt-[220px]">
            <h4 className='mr-[30px]'>Товар</h4>
            <h4>Размер</h4>
            <h4>Цвет</h4>
            <h4>Кол-во</h4>
            <h4>Цена</h4>
          </div>
          : ""
        }
        <ProductList />
      </div>
      <Footer />
    </div>
  )
}

export default Bag;