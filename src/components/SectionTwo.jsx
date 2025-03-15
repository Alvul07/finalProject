import React from 'react'
import Sell1 from '../assets/sell1.png'
import Sell2 from '../assets/sell2.png'
import Sell3 from '../assets/sell3.png'
import WhiteBtn from './WhiteBtn'
import ArrowR from '../assets/arrowR.svg'
import { Link } from 'react-router-dom'


const SectionTwo = () => {
    return (
        <section className='max-w-[1110px] mx-auto mt-[130px]'>
            <h1 className='font-[500] text-[40px] mb-[92px]'>Новая коллекция</h1>
            <div className='flex gap-[30px]'>
                <div>
                    <button className='duration-500 relative group cursor-pointer overflow-hidden'>
                        <img src={Sell1} alt="" />
                        <div className="absolute inset-0 bg-[#6E9C9FA3] opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span><img src={ArrowR} alt="" /></span>
                        </div>
                        </button>
                    <h4 className='text-center text-[20px] font-[500]'>Футболка USA</h4>
                    <div className='flex gap-[10px] justify-center text-[15px] font-[500]'>
                        <p className='text-[#9C9C9C] line-through'>$229</p>
                        <p className='text-[#998E78]'>$129</p>
                    </div>
                </div>
                <div>
                    <button className='duration-500 relative group cursor-pointer overflow-hidden'>
                        <img src={Sell2} alt="" />
                        <div className="absolute inset-0 bg-[#6E9C9FA3] opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span><img src={ArrowR} alt="" /></span>
                        </div>
                        </button>
                    <h4 className='text-center text-[20px] font-[500]'>Купальник Glow</h4>
                    <p className='text-[#998E78] text-center text-[15px] font-[500]'>$129</p>
                </div>
                <div>
                    <button className='duration-500 relative group cursor-pointer overflow-hidden'>
                        <img src={Sell3} alt="" />
                        <div className="absolute inset-0 bg-[#6E9C9FA3] opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span><img src={ArrowR} alt="" /></span>
                        </div>
                    </button>
                    <h4 className='text-center text-[20px] font-[500]'>Свитшот Sweet Shot</h4>
                    <p className='text-[#998E78] text-center text-[15px] font-[500]'>$129</p>
                </div>
            </div>
            <div className='flex justify-center mt-[65px]'>
                <Link to='/shop'>
                <WhiteBtn className='w-[243px] h-[68px]'>Открыть магазин</WhiteBtn>
                </Link>
            </div>
        </section>
    )
}

export default SectionTwo;