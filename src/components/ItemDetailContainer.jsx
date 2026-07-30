import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const productsCollection = doc(db, "products", itemId);
    getDoc(productsCollection)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({
            id: snapshot.id,
            ...snapshot.data()
          });
        }
      });
  }, [itemId]);

  if (!item) {
    return (
      <section className="section pb-0">
        <div className="container py-5 h-min-66">
          <h2>Cargando producto...</h2>
        </div>
      </section>
    );
  }

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;