import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useCartContext } from "../../Context/CartContext";

export const CartWidget = () => {
  const { totalProd } = useCartContext("");

  return (
    <>
      <div>{totalProd()}</div>
      <ShoppingBasketIcon fontSize="large" sx={{ color: "#ffffff" }} />
    </>
  );
};
