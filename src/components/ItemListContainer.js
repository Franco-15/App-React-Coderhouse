import './ItemListContainer.css';
import ProductCard from './ProductCard';

function ItemListContainer({drinks}) {
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