import React from 'react';

const OrderAddress = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div>
            <div className='mt-[80px]'>
                <h3 className='font-[500] text-[25px] mb-[62px]'>Адрес получателя</h3>
                <form className='flex flex-col gap-[35px]'>
                    <input className='border-b w-[350px] pb-[10px]' name='country' value={formData.country} type="text" placeholder='Страна' onChange={handleChange} required />
                    <input className='border-b w-[350px] pb-[10px]' name='city' value={formData.city} onChange={handleChange} type="text" placeholder='Город' required />
                    <input className='border-b w-[350px] pb-[10px]' name='street' value={formData.street} onChange={handleChange} type="text" placeholder='Улица' required />
                    <input className='border-b w-[350px] pb-[10px]' name='house' value={formData.house} onChange={handleChange} type="text" placeholder='Дом' required />
                    <input className='border-b w-[350px] pb-[10px]' name='flat' value={formData.flat} onChange={handleChange} type="text" placeholder='Квартира' required />
                </form>
            </div>
        </div>
    )
}

export default OrderAddress;
