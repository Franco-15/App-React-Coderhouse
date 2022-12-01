import './CartWidget.css';
import {BiCartAlt} from "react-icons/bi";

function CartWidget(){
    return(
        <div className="cartWidget">
            <BiCartAlt className='logoCarrito'/>
            <p>2</p>
        </div>
    );
}

export default CartWidget;