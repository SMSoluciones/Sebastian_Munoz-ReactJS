import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import BeatLoader from "react-spinners/BeatLoader";
// import { products } from "../../assets/products"; //Productos de base de datos.
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = (props) => {
  //Hooks
  let { categoryId } = useParams();
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    // Promesa
    const productsCollection = collection(db, "products"); // Se crea la collection.
    if (categoryId) {
      const queryFilter = query(
        productsCollection,
        where("cat", "==", categoryId)
      ); // Filtro

      getDocs(queryFilter)
        .then((res) =>
          setListProducts(
            res.docs.map((product) => ({ ...product.data(), id: product.id }))
          )
        )
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(productsCollection)
        .then((res) =>
          setListProducts(
            res.docs.map((product) => ({ ...product.data(), id: product.id }))
          )
        )
        .finally(() => {
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
