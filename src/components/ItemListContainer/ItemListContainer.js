import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Hooks
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import BeatLoader from "react-spinners/BeatLoader";
import { products } from "../../assets/products"; //Productos de base de datos.

export const ItemListContainer = (props) => {
  //Hooks
  let { categoryId } = useParams();
  console.log(categoryId);

  const [loading, setLoading] = useState([]);
  const [listProducts, setListProducts] = useState(true);

  useEffect(() => {
    // Promesa
    const itemPromise = (products) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
    };
    if (categoryId) {
      itemPromise(products).then((res) => {
        setListProducts(res.filter((products) => products.cat === categoryId));
        setLoading(false);
      });
    } else {
      itemPromise(products).then((res) => {
        setListProducts(res);
        setLoading(false);
      });
    }
  }, [categoryId]);

  //Return
  return (
    <>
      <main>
        <h2>{props.greeting}</h2>

        {loading ? (
          <BeatLoader color="gray" className="spinner" />
        ) : (
          <ItemList listProducts={listProducts} />
        )}
      </main>
    </>
  );
};
