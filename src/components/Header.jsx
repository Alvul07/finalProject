import React from 'react'
import Logo from '../assets/logo.svg'
import Ring from '../assets/ring.svg'
import ShopBag from '../assets/shopBag.svg'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'

const Header = () => {
  return (
    <header className='max-w-[1370px] mx-auto pt-[51px] flex justify-between items-center relative'>
      <img src={Logo} alt="" />
      <nav>
        <ul className='flex gap-[45px] text-[15px]'>
          <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/'>Главная</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/shop'>Магазин</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/about'>О бренде</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/contacts'>Контакты</NavLink></li>
        </ul>
      </nav>

      <div className='flex gap-[67px]'>
        <div className='flex items-center gap-[13px] text-[15px]'>
          <button><img src={Ring} alt="" /></button>
          <a href="+7 (495) 823-54-12">+7 (495) 823-54-12</a>
        </div>

        <button><img src={ShopBag} alt="" /></button>
      </div>
    </header>
  )
}

export default Header;