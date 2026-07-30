import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function ItemDetail({ item }) {
  const { cart, addItem } = useContext(CartContext);

  const itemInCart = cart.find(prod => prod.id === item.id);
  const stockDisponible =
      item.stock - (itemInCart?.quantity || 0);

  const handleOnAdd = (cantidad) => {
    addItem(item, cantidad);

    toast.success(
        `${item.nombre} agregado al carrito 🛒`
    );
  };
  return (
    <div className="container section mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <img src={item.imagen} alt={item.nombre} className="img-fluid rounded"/>
        </div>
        <div className="col-md-5 text-start">
          <h2>{item.nombre}</h2>
          <p>{item.descripcion}</p>
          <h4 className="my-4"> ${item.precio}</h4>

          <p>Stock disponible: {stockDisponible}</p>
          {stockDisponible > 0 ? (
                  <ItemCount stock={stockDisponible} initial={1} onAdd={handleOnAdd}/>
              ) : (
                  <p className="text-danger fw-bold mt-3">No hay stock disponible.</p>
              )
          }

          <Link to="/" className="btn btn-outline-secondary mt-3">Volver</Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;