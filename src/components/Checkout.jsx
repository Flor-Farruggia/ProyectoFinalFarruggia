import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {
    const { cart, clearCart } = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        nombre: "",
        telefono: "",
        email: ""
    });
    const validateForm = () => {
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
        const phoneRegex = /^[0-9]{7,15}$/;
        if (!nameRegex.test(buyer.nombre)) {
            return "El nombre debe tener al menos 3 letras y solo contener caracteres alfabéticos.";
        }
        if (!phoneRegex.test(buyer.telefono)) {
            return "El teléfono debe contener entre 7 y 15 números.";
        }
        return null;
    };
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = validateForm();
        if (error) {
            toast.error(error);
            return;
        }
        setLoading(true);
        const order = {
            buyer,
            items: cart,
            total,
            date: new Date()
        };
        try {
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);
            for (const item of cart) {

                const productRef = doc(
                    db,
                    "products",
                    item.id
                );

                await updateDoc(productRef, {
                    stock: item.stock - item.quantity
                });
            }
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            toast.error(
                "No pudimos procesar tu compra. Intentá nuevamente."
            );
            console.log(error);
        }finally {
            setLoading(false);
        }
    };

    const total = cart.reduce(
        (acc, item) => acc + item.precio * item.quantity, 0
    );

    if (orderId) {
        return (
            <section className="section h-min-66">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="card border-0 shadow rounded-4 text-center p-5">
                                <div className="thank-icon mx-auto mb-4">
                                    ✓
                                </div>
                                <h2 className="mb-3">
                                    ¡Compra realizada!
                                </h2>
                                <p className="text-muted">
                                    Gracias por tu compra.
                                    Tu pedido fue registrado correctamente.
                                </p>
                                <hr />
                                <p className="mb-2">
                                    Número de orden:
                                </p>
                                <h5 className="fw-bold">
                                    {orderId}
                                </h5>
                                <div className="d-flex align-items-center justify-content-center mt-4">
                                    <Link to="/" className="btn btn-danger">
                                        Volver a la tienda
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (cart.length === 0) {
        return (
            <section className="section h-min-66">
                <div className="container text-center py-5">
                    <h2>Tu carrito está vacío</h2>
                    <p className="mt-3">
                        Agregá productos antes de finalizar la compra.
                    </p>

                    <Link 
                        to="/"
                        className="btn btn-danger mt-3"
                    >
                        Ver productos
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <div className="section container">
            <h2 className="mt-5 mb-4">
                Finalizar compra
            </h2>
            <form className="col-md-6" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Nombre</label>
                    <input type="text" name="nombre" className="form-control" value={buyer.nombre} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label>Teléfono</label>
                    <input type="tel" name="telefono" className="form-control" value={buyer.telefono} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" value={buyer.email} onChange={handleChange} required/>
                </div>
                <hr />
                <h4>Total: ${total}</h4>
                <button className="btn btn-danger mt-3" type="submit" disabled={loading}>
                    {loading 
                        ? "Procesando compra..."
                        : "Confirmar compra"
                    }
                </button>
            </form>
        </div>
    );
}

export default Checkout;