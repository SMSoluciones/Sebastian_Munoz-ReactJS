import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/products";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import BeatLoader from "react-spinners/BeatLoader";

const ItemDetailContainer = () => {
  //Hooks
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    // Promesa
    const itemPromise = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 200);
      });
    };
    itemPromise(products).then((res) => {
      setItem(res.find((products) => products.id === parseInt(productId)));
      setLoading(false);
    });
  }, [productId]);

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
