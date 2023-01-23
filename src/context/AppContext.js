import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { getProducts, addProduct } from "../db/api-firabase";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [lengthCart, setLengthCart] = useState(0);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let drinks = getProducts();
        drinks.then((data) => {
            setProducts(data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);


    const addProductToCart = (drink, quantity,id) => {

        let item = cart.find((item) => item.id === id);
        if (cart.length > 0 && item) {
            item.quantity += quantity;
        } else {
            addProduct(drink, id, quantity)
            item = { ...drink, quantity: quantity, id};
            console.log(item);
            setCart([...cart, item,]);
        }

        setProducts(products.map((product) => {
            if (product.id === id) {
                product.stock -= quantity;
            }
            return product;
        }));

        setLengthCart(lengthCart + quantity);
    }

    const value = {
        products: products,
        loading: loading,
        lengthCart: lengthCart,
        cart: cart,
        addProductToCart: addProductToCart,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
