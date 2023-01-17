import './CartWidget.css';
import {BiCartAlt} from "react-icons/bi";
import { Link } from 'react-router-dom';

function CartWidget({cartLength}){
    return(
        <div className="cartWidget">
            <Link to={'/cart'}>
                <BiCartAlt className='logoCarrito'/>
            </Link>
            <p>{cartLength}</p>
        </div>
    );
}

export default CartWidget;