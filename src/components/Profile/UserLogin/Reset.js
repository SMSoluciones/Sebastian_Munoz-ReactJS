import React, { useState } from "react";
import { useAuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Reset = () => {
  const { resetPassword } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!user.email) {
      setError("Porfavor ingrese un correo.");
    } else {
      try {
        await resetPassword(user.email);
        setError("Se ha enviado un mail de restauración a su correo.");
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          setError("El usuario no se encuentra registrado.");
        }
      }
    }
  };

  return (
    <>
      <FormContainer>
        <div>{error && <p>{error}</p>}</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <button>Restaurar</button>
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
