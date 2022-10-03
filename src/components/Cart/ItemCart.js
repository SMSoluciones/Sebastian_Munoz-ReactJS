import React from "react";
import { useCartContext } from "../../Context/CartContext";

export const ItemCart = ({ product }) => {
  const { removeItem } = useCartContext();

  return (
    <div>
      <p>Producto: {product.title}</p>
      <p>Cantidad: {product.cantidad}</p>
      <p>Precio unitario: $ {product.price}</p>
      <p>Subtotal: ${product.cantidad * product.price}</p>
      <button onClick={() => removeItem(product.id)}>Eliminar Producto</button>
    </div>
  );
};
