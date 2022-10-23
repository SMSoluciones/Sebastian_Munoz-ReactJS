import React, { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalPrice = () =>
    cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);

  const totalProd = () =>
    cart.reduce(
      (acumulador, productActual) => acumulador + productActual.cantidad,
      0
    );

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

  const removeItem = (id) => {
    return setCart(cart.filter((product) => product.id !== id));
  };

  const clear = () => setCart([]);

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };

  return (
    <>
      <CartContext.Provider
        value={{
          addItem,
          clear,
          isInCart,
          removeItem,
          totalPrice,
          totalProd,
          cart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
