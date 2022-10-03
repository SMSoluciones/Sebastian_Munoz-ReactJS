import React from "react";
import "../Cart/Cart.css";
import { useCartContext } from "../../Context/CartContext";
import { ItemCart } from "./ItemCart";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <AvisoCart>
          <p>¡Todavía no has ingresado productos en el carrito! 🤷‍♂️</p>
          <Link to="/">
            <button>Volver</button>
          </Link>
        </AvisoCart>
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

const AvisoCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  font-weight: bold;
  font-size: 25px;

  button {
    width: 200px;
    text-decoration: none;
  }
`;
