import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBtn = ({to, children}) => {
    return (
        <NavLink className={({ isActive }) => isActive ? 'border border-solid border-black bg-black text-white size-[40px] flex items-center justify-center'
            : 'flex items-center justify-center border border-solid border-black size-[40px]'} to={to}>
            <button>
                {children}
            </button>
        </NavLink>
    )
}

export default NavBtn;