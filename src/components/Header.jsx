import React, { useContext } from 'react'
import Logo from '../assets/logo.png'
import ShopBag from '../assets/shopBag.svg'
import { NavLink } from 'react-router-dom'
import { CartContext } from './Bag/ProductAdd'
import Call from './Call/Call'


const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className='max-w-[1370px] mx-auto pt-[46px] flex justify-between items-center relative'>
      <div className='flex gap-[10px] items-center'>
        <img src={Logo} alt="" className='size-[24px]' />
        <p className='font-[500] text-[16px]'>ReWear</p>
      </div>

      <nav>
        <ul className='flex gap-[45px] text-[15px]'>
          <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/'>Главная</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/shop'>Магазин</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/about'>О бренде</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/contacts'>Контакты</NavLink></li>
        </ul>
      </nav>

      <div className='flex gap-[67px] items-center'>
        <Call/>

        <div>
          <NavLink to='/bag'><button className='flex items-center cursor-pointer'><img src={ShopBag} alt="" /></button></NavLink>
          {cart.length > 0 && (
            <span className="absolute top-8 -right-2 bg-[#998E78] flex items-center justify-center text-white text-[9px] size-[15px] rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header;