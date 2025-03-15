import React from 'react'

const WhiteBtn = ({children, className=''}) => {
  return (
    <button className={`border border-solid border-[#6E9C9F] text-[17px] text-[#6E9C9F] 
    hover:bg-[#6E9C9F] hover:text-white duration-500 ${className}`}>
        {children}
    </button>
  )
}

export default WhiteBtn