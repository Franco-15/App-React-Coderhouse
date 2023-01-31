import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import ProductCart from "./ProductCart";
import Form from "./Form";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  if (cart.length === 0)
    return <h1 className="carritoVacio">El carrito esta vacio</h1>;
  else
    return (
      <div className="container">
        <div className="containerCart">
          <Table className="cart" bordered>
            <thead>
              <tr>
                <th>Orden</th>
                <th>Id</th>
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
              {cart.map((drink, id) => {
                return <ProductCart drink={drink} key={id} order={id} />;
              })}
            </tbody>
          </Table>
          <Table className="resume">
            <thead>
              <tr>
                <th>Resumen compra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>
                  $
                  {cart.reduce(
                    (acc, drink) => acc + drink.price * drink.quantity,
                    0
                  )}
                </td>
              </tr>
              <tr>
                <td>Envío</td>
                <td>$0</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>Total a pagar</td>
                <td>
                  $
                  {cart.reduce(
                    (acc, drink) => acc + drink.price * drink.quantity,
                    0
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <Button className="buttonCleanCart" variant="danger" onClick={clearCart}>
                    Vaciar carrito
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="form">
          <h3>Completa tus datos para finalizar la compra:</h3>
          <Form />
        </div>
      </div>
    );
}

export default Cart;
