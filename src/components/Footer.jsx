import React from 'react'
import Logo from '../assets/logo.svg'
import Ring from '../assets/ring.svg'
import { Link, NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import Inst from '../assets/inst.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import BankCards from '../assets/bankCards.png'

const Footer = () => {
    return (
        <footer className='bg-[#F1EADC] mt-[130px]'>
            <div className='w-[1110px] mx-auto pt-[101px] pb-[97px]'>

                <div className='flex justify-between items-center'>
                    <img src={Logo} alt="" />
                    <nav>
                        <ul className='flex gap-[45px] text-[15px]'>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/'>Главная</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/shop'>Магазин</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/about'>О бренде</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-[#6E9C9F] font-[700]' : ''} to='/contacts'>Контакты</NavLink></li>
                        </ul>
                    </nav>

                    <div className=''>
                        <div className='flex items-center gap-[13px] text-[15px]'>
                            <a href="+7 (495) 823-54-12" className='ml-auto'>+7 (495) 823-54-12</a>
                        </div>
                        <div><a href="" className='text-[15px]'>hello@womazing.com</a></div>
                    </div>
                </div>

                <div className='flex mt-[39px] items-center'>

                    <div className='mr-[188px]'>
                        <p>© Все права защищены</p>
                        <a href="" className='mt-[6px] mb-[6px]'>Политика конфиденциальности</a> <br />
                        <a href="">Публичная оферта</a>
                    </div>

                    <div>
                        <nav>
                            <ul className='flex flex-col gap-[10px]'>
                                <li><Link to='/coat'>Пальто</Link></li>
                                <li><Link to='/trousers'>Брюки</Link></li>
                                <li><Link to='/jacket'>Куртки</Link></li>
                                <li><Link to='/sweatShirts'>Толстовки</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className='ml-auto'>
                        <div className='flex gap-[12px]'>
                            <a href="#"><img className='size-[24px]' src={Inst} alt="" /></a>
                            <a href="#"><img className='size-[23px]' src={Facebook} alt="" /></a>
                            <a href="#"><img className='size-[24px]' src={Twitter} alt="" /></a>
                        </div>
                        <div className='mt-[30px]'>
                            <a href="#"><img className='w-[68px] h-[22px] ml-auto' src={BankCards} alt="" /></a>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer;