import React from "react";
import "../Item/Item.css";
import prueba from "../../assets/images/cinta.png";

const Item = ({ product }) => {
  // console.log(product)

  return (
    <div className="item">
      <img src={prueba} alt="" />
      <h5>{product.title}</h5>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
      <button>AMPLIAR</button>
    </div>
  );
};

export default Item;
