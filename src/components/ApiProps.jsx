import React from 'react'
import ArrowR from '../assets/arrowR.svg'
import { NavLink } from 'react-router-dom'

const ApiProps = ({ img, title, price }) => {
    return (
        <NavLink to={`/bagAdd/${encodeURIComponent(title)}`}>
            <div>
                <button className='duration-500 relative group cursor-pointer'>
                    <img src={img} alt="" className='w-[350px] h-[478px] object-cover' />
                    <div className="absolute inset-0 bg-[#6E9C9FA3] opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span><img src={ArrowR} alt="" /></span>
                    </div>
                </button>
                <h4 className='text-center text-[20px] font-[500] mt-[20px]'>{title}</h4>
                <p className='text-[#998E78] text-center text-[15px] font-[500]'>{price}</p>
            </div>
        </NavLink>
    )
}

export default ApiProps;