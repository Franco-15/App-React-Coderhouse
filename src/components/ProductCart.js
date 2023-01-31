import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

function ProductCart({ drink, order }) {
    const { deleteItemCart, updateItemCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(drink.quantity)
    const incrCant = () => {
        setQuantity(quantity + 1);
        updateItemCart({ ...drink, quantity: quantity + 1})
    }
    const decrCant = () => {
        setQuantity(quantity - 1);
        updateItemCart({ ...drink, quantity: quantity - 1})
    }

    return (
        <tr>
            <td>{order}</td>
            <td>{drink.id}</td>
            <td><img src={drink.img.src} alt={drink.img.alt} /></td>
            <td>{drink.name}</td>
            <td>${drink.price}</td>
            <td>{drink.quantity}</td>
            <td>${drink.price * drink.quantity}</td>
            <td className='quantityCart'>
                <Button variant="primary" disabled={drink.quantity === 1 || drink.stock === 0} onClick={decrCant}>-</Button>
                <div className='logQuantifyCart'>{drink.quantity}</div>
                <Button variant="primary" disabled={drink.quantity === drink.stock || drink.stock === 0} onClick={incrCant}>+</Button>
            </td>
            <td>
                <Button variant="danger" onClick={() => deleteItemCart(drink)}>Eliminar</Button>
            </td>
        </tr>
    )
}

export default ProductCart;