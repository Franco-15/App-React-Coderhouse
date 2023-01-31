import './CartWidget.css';
import {BiCartAlt} from "react-icons/bi";
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget(){
    const { cart } = useContext(CartContext);
    let totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    return(
        <div className="cartWidget">
            <Link to={'/cart'}>
                <BiCartAlt className='logoCarrito'/>
            </Link>
            <p>{totalItems}</p>
        </div>
    );
}

export default CartWidget;