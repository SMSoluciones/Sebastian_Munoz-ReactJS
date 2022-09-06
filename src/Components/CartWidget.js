import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const CartWidget = () => {
  return (
    <ShoppingBasketIcon
      style={styles.cart}
      fontSize="large"
      sx={{ color: "#ffffff" }}
    />
  );
};

const styles = {
  cart: {
    display: "flex",
    position: "relative",
    top: "10px",
    left: "30px",
  },
};
