import './ItemListContainer.css';
import ProductCard from './ProductCard';
import { useParams } from "react-router-dom";


function ItemListContainer({drinks}) {
    let {categoryId} = useParams();
    if (categoryId) {
        drinks = drinks.filter((drink) => drink.category === categoryId);
    }
    return (
        <div className="itemListContainer">
            <div className="products">
                {drinks.map((drink) =>
                    <ProductCard key={drink.id} drinkItems={drink} />
                )}
            </div>
        </div >
    );
}

export default ItemListContainer;