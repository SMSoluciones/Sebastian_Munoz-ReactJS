import React, { useState, useEffect } from "react"; // Hooks
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import BeatLoader from "react-spinners/BeatLoader";
import { products } from "../../assets/products"; //Productos de base de datos.

export const ItemListContainer = (props) => {
  // Promesa
  const itemPromise = (productos) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  //Hooks
  const [loading, setLoading] = useState([]);
  const [listProducts, setListProducts] = useState(true);

  useEffect(() => {
    itemPromise(products).then((respuesta) => {
      setLoading(false);
      setListProducts(respuesta);
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
