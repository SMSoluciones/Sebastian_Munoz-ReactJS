import React from "react";
import "../Item/Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} alt="" />
      <h5>{product.title}</h5>
      <p>{product.description}</p>
      <p className="price">$ {product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button>AMPLIAR</button>
      </Link>
    </div>
  );
};

export default Item;
