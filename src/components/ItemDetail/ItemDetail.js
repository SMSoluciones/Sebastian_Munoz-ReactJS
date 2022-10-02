import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const ItemDetail = ({ item }) => {
  const [terminarCompra, setTerminarCompra] = useState(false);
  const { addItem } = useCartContext();

  // Respuesta a Carga en log.
  const onAdd = (cantidad) => {
    setTerminarCompra(true);
    addItem(item, cantidad);
    Toastify({
      text: `Usted a agregado ${cantidad} unidades de ${item.title}.`,
      duration: 3500,
    }).showToast();
  };
  return (
    <div className="itemDetail">
      <img src={item.image} alt="" />
      <div className="itemInformation">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className="price">$ {item.price}</p>

        {terminarCompra ? (
          <Link to="/cart">
            <button>Finalizar Compra</button>
          </Link>
        ) : (
          <ItemCount inicio={1} stock={10} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};
