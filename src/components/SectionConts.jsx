import React, { useState } from 'react'
import GreenBtn from './GreenBtn';

const SectionConts = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Отправленные данные:", formData);

        setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
        })

        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section>
            <div className='flex gap-[100px] mt-[130px] mb-[130px]'>
                <div>
                    <p>Телефон</p>
                    <a href="+7 (495) 823-54-12">+996 555-444-333</a>
                </div>
                <div>
                    <p>E-mail</p>
                    <a href="">ReWear@gmail.com</a>
                </div>
                <div>
                    <p>Адрес</p>
                    <a href="">г. Бишкек, улица Юнусалиева, 25</a>
                </div>
            </div>

            <div>
                <h3 className='font-[500] text-[25px] mb-[62px]'>Напишите нам</h3>
                <form method="post" onSubmit={handleSubmit} className='flex flex-col gap-[35px]'>
                    <input className='border-b w-[350px]' name='name' value={formData.name} type="text" placeholder='Имя' onChange={handleChange} required/>
                    <input className='border-b w-[350px]' name='email' value={formData.email} onChange={handleChange} type="email" placeholder='E-mail' required/>
                    <input className='border-b w-[350px]' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} type="tel" placeholder='Телефон' required/>
                    <textarea className='border-b w-[440px] h-[130px] resize-none'
                        name='message' placeholder='Сообщение' value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit"
                        className='h-[68px] bg-[#6E9C9F] text-white text-[17px] hover:bg-[#509498] duration-500 w-[189px]'>Отправить</button>

                        {isSubmitted && (
                            <div className='w-[440px] h-[80px] bg-[#F1EADC] text-[17px] font-[500] flex items-center justify-center'>
                                <p>Сообщение успешно отправлено</p>
                            </div>
                        )}
                </form>
            </div>
        </section>
    )
}

export default SectionConts;