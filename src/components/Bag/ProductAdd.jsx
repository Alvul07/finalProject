import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        if (cart !== null && cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        } else if (cart == null) {
            localStorage.removeItem("cart");
        }
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existingItem = prev.find(
                (item) => item.title === product.title && item.size === product.size && item.color === product.color
            );

            if (existingItem) {
                return prev.map((item) =>
                    item.title === product.title && item.size === product.size && item.color === product.color
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            }

            const updatedProduct = {
                ...product,
                price: typeof product.price === 'string' && product.price.includes('$')
                    ? parseFloat(product.price.replace('$', ''))
                    : product.price,
                img: product.img || "",
            };

            return [...prev, updatedProduct];
        });
    };

    const removeFromCart = (productToRemove) => {
        setCart((prev) => {
            const updatedCart = prev.filter(
                (product) =>
                    product.title !== productToRemove.title ||
                    product.size !== productToRemove.size ||
                    product.color !== productToRemove.color
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
