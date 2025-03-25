import { useContext } from "react";
import { CartContext } from "./ProductAdd";

const BagSection = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="mt-6 p-4 border rounded-lg">
            <h2 className="text-xl font-bold mb-4">Корзина</h2>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                cart.map((item) => (
                    <div key={item.name} className="flex justify-between items-center border-b py-2">
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">Количество: {item.quantity}</p>
                        </div>
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded-lg"
                            onClick={() => removeFromCart(item.name)}
                        >
                            Удалить
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default BagSection;