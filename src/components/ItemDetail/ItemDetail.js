import React from "react";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <div className="itemDetail">
      <img src={item.image} alt="" />
      <div className="itemInformation">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className="price">$ {item.price}</p>
        <button>COMPRAR</button>
      </div>
    </div>
  );
};
