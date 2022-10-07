import React from "react";
import "../Item/Item.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} alt="" />
      <h5>{product.title}</h5>
      <p>{product.description}</p>
      <PriceProd>$ {product.price}</PriceProd>
      <Link to={`/product/${product.id}`}>
        <button>AMPLIAR</button>
      </Link>
    </div>
  );
};

export default Item;

const PriceProd = styled.p`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
