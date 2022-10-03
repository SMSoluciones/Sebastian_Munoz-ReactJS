import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useCartContext } from "../../Context/CartContext";
import styled from "styled-components";

export const CartWidget = () => {
  const { totalProd } = useCartContext("");

  return (
    <>
      <CartWCon>
        <CartProducts>{totalProd() || ""}</CartProducts>
        <ShoppingBasketIcon fontSize="large" sx={{ color: "#ffffff" }} />
      </CartWCon>
    </>
  );
};

const CartWCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  margin: 10px;
  position: static;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: transform 0.2s;
  }
`;

const CartProducts = styled.div`
  display:flex;
  justify-content:center;
  color: white;
  font-size: 10px:
  border: none;
  background-color: red;
  border-radius:5px;
  width:20px;
  position:relative;
  top: 10px;

`;
