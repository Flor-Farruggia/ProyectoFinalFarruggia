import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Item({ item }) {

    const { cart } = useContext(CartContext);

    const itemInCart = cart.find(
        prod => prod.id === item.id
    );

    const stockDisponible = 
        item.stock - (itemInCart?.quantity ?? 0);

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card prod-card bg-secondary rounded-4 h-100">
                <img src={item.imagen} className="prod-img rounded-4 rounded-bottom-0" alt={item.nombre}/>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title text-white">
                        {item.nombre}
                    </h5>
                    <p className="card-text text-white">
                        ${item.precio}
                    </p>
                    {stockDisponible > 0 ? (
                        <p className="stock text-white">
                            Stock: {stockDisponible}
                        </p>
                    ) : (
                        <p className="stock text-warning fw-bold">
                            Sin stock
                        </p>
                    )}
                    <Link to={`/item/${item.id}`} className="btn btn-white-soft btn-text-01">
                        Ver detalle
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Item;