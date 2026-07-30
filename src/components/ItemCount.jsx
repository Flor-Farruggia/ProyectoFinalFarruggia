import { useEffect, useState } from "react";

function ItemCount({ stock, initial = 1, onAdd }) {

  const [count, setCount] = useState(initial);

  useEffect(() => {
      setCount(stock > 0 ? 1 : 0);
  }, [stock]);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mt-4">
      <div className="d-flex align-items-center gap-3 mb-3">
        <button className="btn btn-outline-secondary" onClick={disminuir} >-</button>
        <span className="fs-4">{count}</span>
        <button className="btn btn-outline-secondary" onClick={incrementar}>+</button>
      </div>
      <button className="btn btn-danger" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;