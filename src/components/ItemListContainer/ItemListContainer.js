import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import BeatLoader from "react-spinners/BeatLoader";
import { products } from "../../assets/products"; //Productos de base de datos.

export const ItemListContainer = (props) => {
  //Hooks
  let { categoryId } = useParams();

  const [listProducts, setListProducts] = useState(true);
  const [loading, setLoading] = useState({});

  useEffect(() => {
    // Promesa
    const itemPromise = (products) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 500);
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
// const productCollection = collection(db, "products");
// getDocs(productCollection);
