import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

export const ItemListContainer = (props) => {
  const onAdd = (cantidad) => {
    console.log(`Usted ha comprado ${cantidad}`);
  };

  return (
    <>
      <main>
        <h2>{props.greeting}</h2>
      </main>
      <ItemCount inicio={1} stock={10} onAdd={onAdd} />
    </>
  );
};
