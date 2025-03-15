import React from 'react'

const GreenBtn = ({children, className=''}) => {
  return (
    <button className={`h-[68px] bg-[#6E9C9F] text-white text-[17px] 
    hover:bg-[#509498] duration-500 ${className}`}>
        {children}
    </button>
  )
}

export default GreenBtn;