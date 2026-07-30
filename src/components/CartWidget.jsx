import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {

    const { cart } = useContext(CartContext);
    const totalQuantity = cart.reduce(
        (acc, item) => acc + item.quantity, 0
    );

    return (
        <Link to="/cart" className="btn-danger cart-btn rounded rounded-pill d-flex align-items-center px-3 py-3 py-lg-2 ms-0 ms-lg-3 position-relative text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18" fill="#fff" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1z"/>
            </svg>
            {totalQuantity > 0 && <span className="cart-badge"> {totalQuantity}</span>}
        </Link>
    );
}

export default CartWidget;