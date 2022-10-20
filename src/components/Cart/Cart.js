import React from "react";
import { useCustomContext } from "../../Context/CustomContext";
import { ItemCart } from "./ItemCart";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cart = () => {
  const { cart, totalPrice, clear } = useCustomContext();

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
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <FinalContenedor>
        <button onClick={() => clear()}>Limpiar carrito</button>
        <Link to="/">
          <button>Agregar mas productos</button>
        </Link>
        <Link to="/form">
          <button>Pagar</button>
        </Link>
        <PrecioFinal>Total a abonar: $ {totalPrice()}.</PrecioFinal>
      </FinalContenedor>
    </>
  );
};

const AvisoCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  font-weight: bold;
  font-size: 25px;

  button {
    width: 200px;
  }
`;

const PrecioFinal = styled.p`
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 0;
  flex-direction: column;
  font-size: 30px;
  font-weight: bold;
  padding-left: 20px;
`;

const FinalContenedor = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
