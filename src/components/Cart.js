import React from 'react';
import './Cart.css';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function Cart() {
    const { cart } = useContext(AppContext);
    const [quantity, setQuantity] = useState(1)
    const incrCant = () => setQuantity(quantity + 1)
    const decrCant = () => setQuantity(quantity - 1)

    if (cart.length === 0)
        return <h1 className='carritoVacio'>
            El carrito esta vacio
        </h1>
    else
        return (

            <div className='containerCart'>
                <Table className='cart' bordered >
                    <thead>
                        <tr>
                            <th>orden</th>
                            <th>id</th>
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Agregar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((drink, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{drink.order}</td>
                                        <td>{drink.id}</td>
                                        <td><img src={drink.img.src} alt={drink.img.alt} /></td>
                                        <td>{drink.name}</td>
                                        <td>${drink.price}</td>
                                        <td>{drink.quantity}</td>
                                        <td>${drink.price * drink.quantity}</td>
                                        <td className='quantityCart'>
                                            <Button variant="primary" disabled={quantity === 1 || drink.stock === 0} onClick={decrCant}>-</Button>
                                            <div className='logQuantifyCart'>{quantity}</div>
                                            <Button variant="primary" disabled={quantity === drink.stock || drink.stock === 0} onClick={incrCant}>+</Button>
                                        </td>
                                        <td>
                                            <Button variant="danger">Eliminar</Button>{' '}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Table className='resume'>
                    <thead>
                        <tr>
                            <th>Resumen compra</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>${cart.reduce((acc, drink) => acc + drink.price * drink.quantity, 0)}</td>
                        </tr>
                        <tr>
                            <td>Envío</td>
                            <td>$0</td>
                        </tr>
                        <tr>
                            <span></span>
                        </tr>
                        <tr>
                            <td>Total a pagar</td>
                            <td>${cart.reduce((acc, drink) => acc + drink.price * drink.quantity, 0)}</td>
                        </tr>
                        <tr>
                            <td>
                                <Button variant="success">Finalizar compra</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button variant="danger">Vaciar carrito</Button>{' '}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
}

export default Cart;