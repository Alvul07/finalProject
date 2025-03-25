import React, { useContext } from "react";
import GreenBtn from "../Btns/GreenBtn";
import { CartContext } from "./ProductAdd";

const ProductList = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const handleRemove = (productToRemove) => {
        removeFromCart(productToRemove);
    };

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
        <div>
            <div className="mt-[50px]">
                {cart.length === 0 ? (
                    <p>Ваша корзина пуста.</p>
                ) : (
                    <div>
                        {cart.map((product, index) => (
                            <div key={index}>
                                <hr className="mb-[50px] text-[#CCCCCC]" />
                                <div className="flex gap-[20px] mb-[20px] pb-[20px] w-full">
                                    <button
                                        onClick={() => handleRemove(product)}
                                        className="text-[20px] text-red-500 mt-[10px] mr-[35px]"
                                    >
                                        ⨉
                                    </button>
                                    <div className="flex gap-[30px] items-center">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-[130px] h-[180px] object-cover"
                                        />
                                        <p className="font-[500] text-[20px] w-[195px]">{product.title}</p>
                                    </div>

                                    <div className="flex items-center justify-around w-full">
                                        <p className="text-[18px]">{product.size}</p>
                                        <p className="text-[18px] flex items-center"><span style={{ backgroundColor: product.color, display: 'inline-block', width: '20px', height: '20px', borderRadius: '50%' }}></span></p>
                                        <p className="text-[18px]">{product.quantity}</p>
                                        <p className="text-[18px]">{product.price ? (product.price * product.quantity).toFixed(2) : "Цена не указана"} $</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {cart.length > 0 && (
                <div className="mt-[50px]">
                    <div className="flex justify-between bg-[#F1EADC] w-full px-[5px]">
                        <p className="text-[20px] font-[500]">Общая сумма<span className="font-[700]">:</span></p>
                        <p className="text-[20px] font-[500]">{totalPrice} $</p>
                    </div>
                    <div className="flex"><GreenBtn className="mt-[70px] ml-auto w-[236px]">Оформить заказ</GreenBtn></div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
