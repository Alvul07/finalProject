import React from 'react'
import Header from '../components/Header';
import SectionConts from '../components/SectionConts';
import Footer from '../components/Footer';

const Contacts = () => {
    return (
        <div>
            <div className='w-[1110px] mx-auto'>
                <Header />
                <div className='mt-[190px]'>
                    <h1 className='text-[55px] font-[500]'>Контакты</h1>
                    <p className='text-[17px] font-[500] mt-[20px]'>Главная — <span className='text-[#909090]'>Контакты</span></p>
                </div>
                <SectionConts/>
            </div>
            <Footer/>
        </div>
    )
}

export default Contacts;