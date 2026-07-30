import Item from "./Item";

function ItemList({ products }) {

    return (

        <div className="row g-4">
            {products.map(item => (
                <Item key={item.id} item={item}/>
            ))}
        </div>

    );

}

export default ItemList;