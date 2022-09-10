import React from "react";
import Item from "../Item/Item";
import "../ItemList/item_container.css";

const ItemList = () => {
  return (
    <>
      <div className="item_container">
        <Item />
      </div>
    </>
  );
};

export default ItemList;
