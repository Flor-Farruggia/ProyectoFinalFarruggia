import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {

        const cartStorage = localStorage.getItem("cart");

        return cartStorage
            ? JSON.parse(cartStorage)
            : [];

    });


    useEffect(() => {

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

    }, [cart]);
    
    const addItem = (item, quantity) => {

        const existItem = cart.find(prod => prod.id === item.id);
        if (existItem) {
            const newCart = cart.map(prod =>
                prod.id === item.id
                    ? {
                        ...prod,
                        quantity: prod.quantity + quantity
                    }
                    : prod
            );
            setCart(newCart);
        } else {
            setCart([
                ...cart,
                {
                    ...item, quantity
                }
            ]);
        }
    };


    const removeItem = (id) => {
        const newCart = cart.map((item) => {
            if (item.id === id) {
                return {
                    ...item, quantity: item.quantity - 1
                };
            }
            return item;
        }).filter((item) => item.quantity > 0);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;