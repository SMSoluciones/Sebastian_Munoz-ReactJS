import React, { createContext, useState, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const CustomContext = createContext([]);
export const useCustomContext = () => useContext(CustomContext);

export const CustomProvider = ({ children }) => {
  //Cart Functions
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

  const logout = () => {
    signOut(auth);
  };

  //Login Functions
  const [user, setUser] = useState(null);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      <CustomContext.Provider
        value={{
          //Cart Functions
          addItem,
          clear,
          isInCart,
          removeItem,
          totalPrice,
          totalProd,
          cart,
          //Login Functions
          signUp,
          login,
          logout,
          user,
        }}
      >
        {children}
      </CustomContext.Provider>
    </>
  );
};
