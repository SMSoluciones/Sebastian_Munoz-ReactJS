import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  // Respuesta a Carga en log.
  const onAdd = (cantidad) => {
    console.log(`Usted ha cargado ${cantidad} unidades`);
  };
  return (
    <div className="itemDetail">
      <img src={item.image} alt="" />
      <div className="itemInformation">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className="price">$ {item.price}</p>
        <ItemCount inicio={1} stock={10} onAdd={onAdd} />
      </div>
    </div>
  );
};
