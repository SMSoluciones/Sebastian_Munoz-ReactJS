import React from "react";
import { useState, useEffect } from "react";
import { products } from "../../assets/products";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  // Promesa
  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products[0]);
      }, 3000);
    });
  };

  const [item, setItem] = useState({});

  useEffect(() => {
    getItem(products).then((respuesta) => setItem(respuesta));
  }, []);

  return (
    <div className="detailContainer">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
