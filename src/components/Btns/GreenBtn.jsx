import React from 'react'

const GreenBtn = ({children, className='', onClick}) => {
  return (
    <button className={`h-[68px] bg-[#6E9C9F] text-white text-[17px] 
    hover:bg-[#509498] duration-500 cursor-pointer ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default GreenBtn;