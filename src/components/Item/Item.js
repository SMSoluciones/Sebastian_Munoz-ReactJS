import React from "react";
import "../Item/Item.css";

const Item = ({ product }) => {
  // console.log(product)

  return (
    <div className="item">
      <img src={product.image} alt="" />
      <h5>{product.title}</h5>
      <p>{product.description}</p>
      <p className="price">$ {product.price}</p>
      <button>AMPLIAR</button>
    </div>
  );
};

export default Item;
