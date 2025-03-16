import React from 'react'
import { NavLink } from 'react-router-dom'

const NavShop = () => {
    return (
        <div className='mt-[214px] mb-[92px]'>
            <nav>
                <ul className='flex gap-[10px]'>
                        <NavLink to='/shop' className={({isActive}) => isActive 
                        ? 'bg-black h-[62px] w-[162px] border border-black text-[17px] font-[500] flex items-center justify-center text-white' 
                        : 'h-[62px] w-[162px] border border-black text-[17px] font-[500] flex items-center justify-center'}>
                            <button>Все</button>
                        </NavLink>
                
                        <NavLink to='/coat' className={({isActive}) => isActive 
                        ? 'bg-black h-[62px] w-[191px] border border-black text-[17px] font-[500] flex items-center justify-center text-white' 
                        : 'h-[62px] w-[191px] border border-black text-[17px] font-[500] flex items-center justify-center'}>
                            <button>Пальто</button>
                        </NavLink>
        
                        <NavLink to='/trousers' className={({isActive}) => isActive 
                        ? 'bg-black h-[62px] w-[216px] border border-black text-[17px] font-[500] flex items-center justify-center text-white' 
                        : 'h-[62px] w-[216px] border border-black text-[17px] font-[500] flex items-center justify-center'}>
                            <button>Брюки</button>
                        </NavLink>
                  
                        <NavLink to='/jacket' className={({isActive}) => isActive 
                        ? 'bg-black h-[62px] w-[223px] border border-black text-[17px] font-[500] flex items-center justify-center text-white' 
                        : 'h-[62px] w-[223px] border border-black text-[17px] font-[500] flex items-center justify-center'}>
                            <button>Куртки</button>
                        </NavLink>
                
                        <NavLink to='/sweatshirts' className={({isActive}) => isActive 
                        ? 'bg-black h-[62px] w-[218px] border border-black text-[17px] font-[500] flex items-center justify-center text-white' 
                        : 'h-[62px] w-[218px] border border-black text-[17px] font-[500] flex items-center justify-center'}>
                            <button>Толстовки</button>
                        </NavLink>

                </ul>
            </nav>
        </div>
    )
}

export default NavShop;