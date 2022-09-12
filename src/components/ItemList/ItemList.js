import React from "react";
import Item from "../Item/Item";
import "../ItemList/ItemList.css";

const ItemList = ({ listProducts }) => {
  // console.log(listProducts) //Test;
  return (
    <>
      <div className="item_container">
        {listProducts.map((prod, i) => (
          <Item key={`${prod.product}-${i}`} product={prod} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
