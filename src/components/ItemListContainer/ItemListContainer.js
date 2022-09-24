import React, { useState, useEffect } from "react"; // Hooks
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import BeatLoader from "react-spinners/BeatLoader";
import { products } from "../../assets/products"; //Productos de base de datos.

export const ItemListContainer = (props) => {
  // Promesa
  const itemPromise = (products) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };

  //Hooks
  const [loading, setLoading] = useState([]);
  const [listProducts, setListProducts] = useState(true);

  useEffect(() => {
    itemPromise(products).then((res) => {
      setLoading(false);
      setListProducts(res);
    });
  }, []);

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
