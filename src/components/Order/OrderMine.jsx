import React, { useContext } from 'react'
import { CartContext } from '../Bag/ProductAdd';

const OrderMine = () => {
    const { cart } = useContext(CartContext);


    const totalPrice = cart.reduce((total, product) => {
        let price = product.price;
        if (typeof price === 'string' && price.includes('$')) {
            price = parseFloat(price.replace('$', ''));
        } else {
            price = parseFloat(price);
        }

        if (isNaN(price)) {
            console.warn(`Price is invalid for product: ${product.title}`);
            return total;
        }

        return total + price * product.quantity;
    }, 0).toFixed(2);

    return (
        <div className='w-[280px]'>
            <h3 className='font-[500] text-[25px] mb-[50px]'>Ваш заказ</h3>
            <div className='font-[500]'>
                <div>
                    <div className='flex w-[280px] justify-between px-[10px]'>
                        <h4 className='text-[20px]'>Товар</h4>
                        <h4 className='text-[20px] text-end'>Всего</h4>
                    </div>
                    <hr className='text-[#CCCCCC] mt-[10px]' />
                </div>
                <div className='flex flex-col gap-[20px]'>
                    {cart.map((item, index) => (
                        <div key={index}>
                            <div className='flex justify-between mt-[10px] w-[260px] mx-auto'>
                                <div>
                                    <p>{item.title}</p>
                                </div>
                                <div>
                                    <p>${item.price ? (item.price * item.quantity).toFixed(2) : "Цена не указана"}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-between mt-[30px] text-[20px] px-[10px] bg-[#F1EADC] h-[60px] items-center'>
                        <h4>Итого</h4>
                        <h4>${totalPrice}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderMine;