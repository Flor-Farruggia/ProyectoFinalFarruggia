import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import SkeletonList from "./SkeletonList";

import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {

    const { categoryId } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);

        let productsCollection = collection(db, "products");

        if (categoryId) {
            productsCollection = query(
                productsCollection,
                where("categoria", "==", categoryId)
            );
        }

        getDocs(productsCollection)
            .then((snapshot) => {

                const productsList = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));

                setItems(productsList);

                setTimeout(() => {
                    const section = document.getElementById("productos");

                    if (section) {
                        section.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                }, 50);

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });

    }, [categoryId]);

    return (
        <section className="section bg-white-soft">
            <div className="container" id="productos">
                <h2 className="text-danger text-uppercase mb-4">
                    {categoryId
                        ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
                        : "Productos"}
                </h2>
                {
                    loading
                    ? <SkeletonList />
                    : <ItemList products={items} />
                }
            </div>
        </section>
    );
}

export default ItemListContainer;