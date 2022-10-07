import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/products";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import styled from "styled-components";
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
