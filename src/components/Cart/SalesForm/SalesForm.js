import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useCartContext } from "../../../Context/CartContext";
import styled from "styled-components";

export const SalesForm = () => {
  const { cart, totalPrice, clear } = useCartContext();

  const [inputValues, setInputValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    adress: "",
    flat: "",
  });
  const total = totalPrice();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const finalSale = (e) => {
    e.preventDefault();
    const ventasCollection = collection(db, "sales");
    addDoc(ventasCollection, {
      usuario: inputValues,
      items: cart,
      date: serverTimestamp(),
      total,
    }).then((res) => {
      console.log(res.id);
      clear();
    });
  };

  return (
    <>
      <FormContainer>
        <h2>Usted debera abonar: $ {totalPrice()} </h2>
        <form onSubmit={finalSale}>
          <input
            name="name"
            type="name"
            placeholder="Nombre"
            onChange={handleOnChange}
          />
          <input
            name="surname"
            type="family-name"
            placeholder="Apellido"
            onChange={handleOnChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleOnChange}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Telefono"
            onChange={handleOnChange}
          />
          <input
            name="adress"
            type="street-address"
            placeholder="Direccion"
            onChange={handleOnChange}
          />
          <input
            name="flat"
            type="text"
            placeholder="Departamento"
            onChange={handleOnChange}
          />
          <button>Finalizar Compra</button>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  input {
    height: 30px;
    width: 300px;
    border-radius: 10px;
    border: none;
    margin: 5px;
  }
`;
