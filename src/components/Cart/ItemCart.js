import React from "react";
import { useCartContext } from "../../Context/CartContext";
import styled from "styled-components";

export const ItemCart = ({ product }) => {
  const { removeItem } = useCartContext();

  return (
    <>
      <ItemContainerClass>
        <ItemClass>
          <img src={product.image} alt="" />
          <p>Producto: {product.title}</p>
          <p>Cantidad: {product.cantidad}</p>
          <p>Precio unitario: $ {product.price}</p>
          <p>Subtotal: ${product.cantidad * product.price}</p>
        </ItemClass>
        <button onClick={() => removeItem(product.id)}>❌</button>
      </ItemContainerClass>
    </>
  );
};

const ItemContainerClass = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    font-size: 10px;
    font-weight: bold;
  }
`;

const ItemClass = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(220, 220, 220);
  justify-content: center;
  align-content: center;
  width: 80%;
  border-radius: 10px;

  img {
    display: flex;
    height: 50px;
    width: 50px;
    align-self: center;
  }

  p {
    display: flex;
    margin: 20px;
  }
`;
