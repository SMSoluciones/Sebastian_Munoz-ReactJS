import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useCartContext } from "../../../Context/CartContext";

export const SalesForm = () => {
  const { cart, totalPrice, clear } = useCartContext();
  const total = totalPrice();

  const datosComprador = {
    nombre: "Sebastian",
    apellido: "Muñoz",
    edad: 32,
    card: 123184124123,
  };

  const finalizarCompra = () => {
    const ventasCollection = collection(db, "sales");
    addDoc(ventasCollection, {
      datosComprador,
      items: cart,
      date: serverTimestamp(),
      total,
    }).then((res) => {
      console.log(res.id);
      clear();
    });
  };

  return (
    <>
      <h1> $ {totalPrice()} </h1>
      <form action=""></form>
      <button onClick={finalizarCompra}>EnviarCompra</button>;
    </>
  );
};
