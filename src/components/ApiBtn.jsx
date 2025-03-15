import React from 'react'
import { NavLink } from 'react-router-dom'

const ApiBtn = () => {
    return (
        <div className="flex justify-center gap-[14px] mb-2">
            <button
                className="size-[40px] border border-black text-black text-[17px] font-[500]"
            >
                <NavLink className={({ isActive }) => isActive ? 'border border-solid border-black bg-black text-white px-[13.8px] py-[6.5px]' : ''} to='/shop'>1</NavLink>
            </button>

            <button
                className="size-[40px] border border-black text-black text-[17px] font-[500]"
            >
                <NavLink className={({ isActive }) => isActive ? 'border border-solid border-black bg-black text-white px-[12.8px] py-[6px]' : ''} to='/secondApi'>2</NavLink>
            </button>
        </div>
    )
}

export default ApiBtn;