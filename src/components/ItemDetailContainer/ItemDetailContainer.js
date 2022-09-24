import React from "react";
import { useState, useEffect } from "react";
import { products } from "../../assets/products";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import BeatLoader from "react-spinners/BeatLoader";

const ItemDetailContainer = () => {
  // Promesa
  const customFetch = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products[0]);
      }, 3000);
    });
  };
  //Hooks
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    customFetch(products).then((res) => {
      setLoading(false);
      setItem(res);
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
