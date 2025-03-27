import React, { useState } from 'react'
import Header from '../Header';
import OrderSection from './OrderSection';
import Footer from '../Footer';
import OrderMine from './OrderMine';
import GreenBtn from '../Btns/GreenBtn';
import OrderAddress from './OrderAddress';
import { Link, useNavigate } from 'react-router-dom';

const OrderTake = () => {
    const [active, setActive] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        country: "",
        city: "",
        street: "",
        house: "",
        flat: "",
    });

    const isFormValid = () => {
        console.log(formData, active);
        return (
            formData.name.trim() &&
            formData.email.trim() &&
            formData.phoneNumber.trim() &&
            formData.country.trim() &&
            formData.city.trim() &&
            formData.street.trim() &&
            formData.house.trim() &&
            formData.flat.trim() &&
            formData.message.trim() &&
            (active === "cash" || active === "card")
        );
    };
    const handlePlaceOrder = () => {
        if (!isFormValid()) {
            alert("Пожалуйста, заполните все обязательные поля и выберите способ оплаты.");
            return;
        }

        console.log("Отправляем данные на следующую страницу:", formData, active);
        navigate('/orderSuccess', { state: { ...formData, paymentMethod: active } });
    };

    return (
        <div>
            <div className='w-[1110px] mx-auto'>
                <Header />
                <div className='mt-[190px]'>
                    <h1 className='text-[55px] font-[500]'>Оформление заказа</h1>
                    <p className='text-[17px] font-[500] mt-[20px] flex gap-[13px]'>
                        Главная <span>—</span> <span className='text-[#909090]'>Оформление заказа</span>
                    </p>
                </div>

                <div className='flex mt-[210px] justify-between'>
                    <div>
                        <OrderSection formData={formData} setFormData={setFormData} />
                        <OrderAddress formData={formData} setFormData={setFormData} />
                        <div className='mt-[80px]'>
                            <h3 className='font-[500] text-[25px]'>Комментарии</h3>
                            <textarea className='border-b w-[350px] h-[130px] mt-[50px] resize-none'
                                name='message' placeholder='Страна' value={formData.message} onChange={handleChange} required>
                            </textarea>
                        </div>
                    </div>
                    <div>
                        <OrderMine />
                        <div className='mt-[145px]'>
                            <h3 className='font-[500] text-[25px]'>Способы оплаты</h3>
                            <div className='mt-[50px] space-y-4'>
                                <label className='flex items-center gap-[14px] cursor-pointer'>
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={active === "cash"}
                                        onChange={() => setActive("cash")}
                                        className="hidden"
                                    />
                                    <div className={`size-[22px] border border-black flex bg-white items-center justify-center ${active === "cash" ? "bg-black" : "bg-white"}`}>
                                        {active === "cash" && <div className="size-[10px] bg-black"></div>}
                                    </div>
                                    <p className='text-[17px] font-[500]'>Оплата наличными</p>
                                </label>

                                <label className='flex items-center gap-[14px] cursor-pointer'>
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={active === "card"}
                                        onChange={() => setActive("card")}
                                        className="hidden"
                                    />
                                    <div className={`size-[22px] border border-black flex bg-white items-center justify-center ${active === "card" ? "bg-black" : "bg-white"}`}>
                                        {active === "card" && <div className="size-[10px] bg-black"></div>}
                                    </div>
                                    <p className='text-[17px] font-[500]'>Оплата картой</p>
                                </label>
                            </div>

                            <div className="mt-[50px]">
                                {isFormValid() ? (
                                    
                                        <GreenBtn onClick={handlePlaceOrder} className='w-[246px]'>
                                            Разместить заказ
                                        </GreenBtn>
                                  
                                ) : (
                                    <GreenBtn onClick={handlePlaceOrder} className='w-[246px]'>
                                        Разместить заказ
                                    </GreenBtn>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
        
    )
}

export default OrderTake;
