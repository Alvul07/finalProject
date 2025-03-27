import React from 'react'
import Header from '../Header';
import success from '../../assets/Success.svg'
import WhiteBtn from '../Btns/WhiteBtn';
import Footer from '../Footer';
import { Link, useLocation } from 'react-router-dom';

const OrderSuccess = () => {
    const location = useLocation();
    const formData = location.state;

    console.log(formData);

    return (
        <div>
            <div className='w-[1110px] mx-auto'>
                <Header />
                <div className='mt-[190px]'>
                    <h1 className='text-[55px] font-[500]'>Заказ получен</h1>
                    <p className='text-[17px] font-[500] mt-[20px] flex gap-[13px]'>
                        Главная <span>—</span> <span>Оформление заказа</span> <span>—</span> <span className='text-[#909090]'>Заказ получен</span>
                    </p>
                </div>

                <div className='flex justify-between items-center mt-[210px]'>
                    <div className='flex gap-[45px]'>
                        <img src={success} alt="" />
                        <div className='font-[500]'>
                            <h3 className='text-[25px]'>Заказ успешно оформлен</h3>
                            <p className='text-[17px] mt-[8px]'>Мы свяжемся с вами в ближайшее время!</p>
                        </div>
                    </div>
                    <Link to='/'>
                    <WhiteBtn className='w-[272px] h-[68px]'>Перейти на главную</WhiteBtn>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default OrderSuccess;