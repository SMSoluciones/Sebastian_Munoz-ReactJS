import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCustomContext } from "../../Context/CustomContext";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import styled from "styled-components";

export const ItemDetail = ({ item }) => {
  const [terminarCompra, setTerminarCompra] = useState(false);
  const { addItem } = useCustomContext();

  // Respuesta a Carga en log.
  const onAdd = (cantidad) => {
    setTerminarCompra(true);
    addItem(item, cantidad);
    Toastify({
      text: `Usted a agregado ${cantidad} unidades de ${item.title}.`,
      duration: 3500,
    }).showToast();
  };
  return (
    <>
      <Link to="/">
        <Volver>Volver</Volver>
      </Link>
      <div className="itemDetail">
        <img src={item.image} alt="" />
        <div className="itemInformation">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p className="price">$ {item.price}</p>

          {terminarCompra ? (
            <>
              {" "}
              <Link to="/">
                <button>Agregar mas productos</button>
              </Link>
              <Link to="/cart">
                <FinalizarCompra>Finalizar Compra</FinalizarCompra>
              </Link>
            </>
          ) : (
            <ItemCount inicio={1} stock={100} onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
};

const Volver = styled.button`
  position: absolute;
  background-color: black;
  color: white;
  width: 100px;
`;

const FinalizarCompra = styled.button`
  background-color: green;
  color: white;
`;
