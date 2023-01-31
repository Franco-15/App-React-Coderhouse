import React, { createContext, useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { createOrder, getProducts } from "../db/api-firabase";
import { success, warning } from "../toast";
import { updateProducts } from "../db/api-firabase";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    getProducts().then((data) => {
        setProducts(data);
        setLoading(false);
    }).catch((err) => {
        console.log(err);
    });
  }, []);

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const addItemCart = (product) => {
    let newCart = [...cart];
    let productInCart = newCart.find((item) => item.id === product.id);
    if (productInCart) {
      if (productInCart.quantity + product.quantity <= product.stock) {
        success("Producto agregado al carrito");
        productInCart.quantity += product.quantity;
      } else {
        productInCart.quantity = product.stock;
        warning("No hay stock suficiente");
      }
    } else {
      success("Producto agregado al carrito");
      newCart.push(product);
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const deleteItemCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateItemCart = (product) => {
    let newCart = [...cart];
    let productInCart = newCart.find((item) => item.id === product.id);
    if (productInCart) {
      productInCart.quantity = product.quantity;
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const generateOrder = () => {
    const newOrder = {
      products: {...cart},
      date: new Date()
    }
    createOrder(newOrder).then((data) => {
      updateProducts(cart);
      clearCart();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su orden ha sido generada con exito',
        text: `Su numero de orden es: ${data.id}`,
        showCloseButton: true,
        timer: 5000
      })
    }).catch((err) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No se pudo generar la orden',
        text: `Error: ${err}`,
        showCloseButton: true,
        timer: 4000
      })
    });
  }

  const value = {
    products: products,
    cart: cart,
    loading: loading,
    setProducts: setProducts,
    addItemCart: addItemCart,
    deleteItemCart: deleteItemCart,
    updateItemCart: updateItemCart,
    clearCart: clearCart,
    generateOrder: generateOrder
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
