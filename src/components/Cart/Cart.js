import React from "react";
import "../Cart/Cart.css";
import { useCartContext } from "../../Context/CartContext";
import { ItemCart } from "./ItemCart";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>
          No hay productos en el carrito <Link to="/">Volver</Link>
        </p>
      </>
    );
  }
  return (
    <>
      <Link to="/">
        <button>Agregar mas productos</button>
      </Link>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total a abonar: {totalPrice()}</p>
    </>
  );
};
