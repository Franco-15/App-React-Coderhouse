import './ItemListContainer.css';
import Product from './Product';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from '../context/AppContext';
import Loading from './Loading';

function ItemListContainer() {
    const {products, loading} = useContext(AppContext);
    let { categoryId } = useParams();
    let drinks = products;
    if (categoryId) {
        drinks = drinks.filter((drink) => drink.category === categoryId);
    }
    return (
        
        <div className="itemListContainer">
            {loading ? <Loading/> : 
            <div className="products">
                {drinks.map((drink) =>
                    <Product key={drink.id} drinkItems={drink} />
                )}
            </div>
        }
        </div >
    );
}

export default ItemListContainer;