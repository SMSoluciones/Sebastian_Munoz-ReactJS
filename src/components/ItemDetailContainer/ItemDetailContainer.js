import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, productId);
    getDoc(refDoc)
      .then((result) => {
        setItem({
          id: result.id,
          ...result.data(),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <DetailContainer>
      {loading ? (
        <BeatLoader color="gray" className="spinner" />
      ) : (
        <ItemDetail item={item} />
      )}
    </DetailContainer>
  );
};

export default ItemDetailContainer;

const DetailContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    height: 500px;
    border-radius: 20px;
  }
`;
