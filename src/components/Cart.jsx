import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

    const { cart, removeItem, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <section className="py-5">
                <div className="container d-flex flex-column align-items-center justify-content-center text-center h-min-66">
                        <h2>Tu carrito está vacío</h2>
                        <Link  to="/" className="btn btn-danger mt-3">Ver productos</Link>
                </div>
            </section>
        );
    }

    const total = cart.reduce(
        (acc, item) => acc + item.precio * item.quantity, 0
    );

    return (
        <section className="section">
            <div className="container py-5">
                <h2 className="mb-4">Carrito</h2>

                {cart.map((item) => (

                    <div key={item.id} className="card mb-3">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-2">
                                <img src={item.imagen}  alt={item.nombre}  className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5>{item.nombre}</h5>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio: ${item.precio}</p>
                                    <p>Subtotal:{" "} ${item.precio * item.quantity}</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-end pe-4">
                                <button className="btn btn-outline-danger"  onClick={() => removeItem(item.id)}> Eliminar </button>
                            </div>
                        </div>
                    </div>
                ))}
                <hr />
                <h3>Total: ${total}</h3>
                <div className="d-flex gap-3 mt-4">
                    <button  className="btn btn-secondary"  onClick={clearCart} > Vaciar carrito </button>
                    <Link to="/checkout" className="btn btn-danger">Finalizar compra</Link>
                </div>
            </div>
        </section>
    );
}

export default Cart;