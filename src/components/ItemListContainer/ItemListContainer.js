import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer = (props) => {
  const onAdd = (cantidad) => {
    console.log(`Usted ha comprado ${cantidad} unidades`);
  };

  return (
    <>
      <main>
        <h2>{props.greeting}</h2>
      </main>
      <ItemList />
      <ItemCount inicio={1} stock={10} onAdd={onAdd} />
    </>
  );
};
