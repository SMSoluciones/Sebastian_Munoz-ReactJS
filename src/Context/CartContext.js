import React, { useState, useContext } from "react";

// Context
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Agregar item al carrito.
  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, cantidad: product.cantidad + cantidad }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  console.log("Cart:", cart);

  //Eliminar item
  const removeItem = (id) => {
    return setCart(cart.filter((product) => product.id !== id));
  };
  //Borrar todos los items
  const clear = () => setCart([]);
  //Buscar en el Cart
  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };

  return (
    <>
      <CartContext.Provider value={{ addItem, clear, isInCart, removeItem }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
