import React from 'react'
import NavBtn from './NavBtn';

const ApiBtn = () => {
    return (
        <div className="flex justify-center gap-[14px] mb-2 text-[17px] font-[500]">
            <NavBtn to='/shop'>1</NavBtn>
            <NavBtn to='/secondApi'>2</NavBtn>
            <NavBtn to='/thirdApi'>3</NavBtn>
            <NavBtn to='/fourthApi'>4</NavBtn>
        </div>
    )
}

export default ApiBtn;