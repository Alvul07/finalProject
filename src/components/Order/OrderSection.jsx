import React from 'react';

const OrderSection = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <section>
            <div>
                <h3 className='font-[500] text-[25px] mb-[62px]'>Данные покупателя</h3>
                <form className='flex flex-col gap-[35px]'>
                    <input className='border-b w-[350px] pb-[10px]' name='name' value={formData.name} type="text" placeholder='Имя' onChange={handleChange} required />
                    <input className='border-b w-[350px] pb-[10px]' name='email' value={formData.email} onChange={handleChange} type="email" placeholder='E-mail' required />
                    <input className='border-b w-[350px] pb-[10px]' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} type="tel" placeholder='Телефон' required />
                </form>
            </div>
        </section>
    )
}

export default OrderSection;
