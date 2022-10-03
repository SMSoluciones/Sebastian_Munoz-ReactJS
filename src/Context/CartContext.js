import React, { useState, useContext } from "react";

// Context
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Suma el precio total.
  const totalPrice = () =>
    cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);

  // Suma el precio total de productos.
  const totalProd = () =>
    cart.reduce(
      (acumulador, productActual) => acumulador + productActual.cantidad,
      0
    );

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

  console.log("Cart de CartContext:", cart);

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
