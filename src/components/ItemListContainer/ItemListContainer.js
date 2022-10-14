import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import BeatLoader from "react-spinners/BeatLoader";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import styled from "styled-components";

export const ItemListContainer = (props) => {
  let { categoryId } = useParams();
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    if (categoryId) {
      const queryFilter = query(
        productsCollection,
        where("cat", "==", categoryId)
      );

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

  return (
    <>
      <ItemListClass>
        <h2>{props.greeting}</h2>
        {loading ? (
          <BeatLoader color="gray" className="spinner" />
        ) : (
          <ItemList listProducts={listProducts} />
        )}
      </ItemListClass>
    </>
  );
};

const ItemListClass = styled.main`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  h2 {
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
  }
  .spinner {
    display: flex;
    justify-content: center;
    margin: 40px;
  }
`;
