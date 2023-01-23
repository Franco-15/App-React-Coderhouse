import './CartWidget.css';
import {BiCartAlt} from "react-icons/bi";
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function CartWidget(){
    const { lengthCart } = useContext(AppContext);
    return(
        <div className="cartWidget">
            <Link to={'/cart'}>
                <BiCartAlt className='logoCarrito'/>
            </Link>
            <p>{lengthCart}</p>
        </div>
    );
}

export default CartWidget;