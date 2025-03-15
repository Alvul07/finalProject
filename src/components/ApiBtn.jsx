import React from 'react'
import { NavLink } from 'react-router-dom'

const ApiBtn = () => {
    return (
        <div className="flex justify-center gap-[14px] mb-2">


            <NavLink className={({ isActive }) => isActive ? 'border border-solid border-black bg-black text-white size-[40px] flex items-center justify-center'
             : 'flex items-center justify-center border border-solid border-black size-[40px]'} to='/shop'>
                <button>
                    1
                </button>
            </NavLink>

            <NavLink className={({ isActive }) => isActive ? 'border border-solid border-black bg-black text-white size-[40px] flex items-center justify-center'
             : 'flex items-center justify-center border border-solid border-black size-[40px]'} to='/secondApi'>
                <button>
                    2
                </button>
            </NavLink>
        </div>
    )
}

export default ApiBtn;