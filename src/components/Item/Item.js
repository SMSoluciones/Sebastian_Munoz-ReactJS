import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <ItemClass>
        <img src={product.image} alt="" />
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <PriceProd>$ {product.price}</PriceProd>
      </ItemClass>
    </Link>
  );
};

export default Item;

const PriceProd = styled.p`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemClass = styled.div`
  display: flex;
  height: auto;
  width: 250px;
  transition: transform 0.2s;
  background-color: rgb(220, 220, 220);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  filter: drop-shadow(5px 5px 5px gray);
  margin: 15px;
  padding: 20px;
  text-align: center;

  &:hover {
    transform: scale(1.1, 1.1);
    transition: transform 0.2s;
  }

  img {
    display: flex;
    width: 220px;
    height: 165px;
    border-radius: 20px;
  }

  button {
    border: 0;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 400;
    height: 30px;
  }

  h5 {
    font-size: 18px;
  }
`;
