import React from "react";
import { useCartContext } from "../../Context/CartContext";
import styled from "styled-components";

export const ItemCart = ({ product }) => {
  const { removeItem } = useCartContext();

  return (
    <>
      <ItemClass>
        <div>
          <p>Producto: {product.title}</p>
          <p>Cantidad: {product.cantidad}</p>
          <p>Precio unitario: $ {product.price}</p>
          <p>Subtotal: ${product.cantidad * product.price}</p>
          <button onClick={() => removeItem(product.id)}>
            Eliminar Producto
          </button>
        </div>
      </ItemClass>
    </>
  );
};

const ItemClass = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    background-color: rgb(220, 220, 220);
    justify-content: center;
    padding: 20px;
    border-radius: 20px;
  }

  button {
    font-size: 15px;
    height: 25px;
    font-weight: bold;
  }
  p {
    margin: 8px;
  }
`;
