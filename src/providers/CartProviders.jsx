import CartProvider from "../context/CartContext";

function Providers({ children }) {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    );
}

export default Providers;