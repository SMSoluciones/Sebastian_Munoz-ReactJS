import React from "react";
import { useState, useEffect } from "react";
import { products } from "../../assets/products";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import BeatLoader from "react-spinners/BeatLoader";

const ItemDetailContainer = () => {
  // Promesa
  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products[0]);
      }, 3000);
    });
  };
  //Hooks
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState({});

  useEffect(() => {
    getItem(products).then((respuesta) => {
      setLoading(false);
      setItem(respuesta);
    });
  }, []);

  return (
    <div className="detailContainer">
      {loading ? (
        <BeatLoader color="gray" className="spinner" />
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
