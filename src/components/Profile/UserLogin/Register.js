import React, { useState } from "react";
import { useAuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Register = () => {
  const { signUp } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      if (error.code === "auth/weak-password") {
        setError("Contraseña Invalida (Debe tener mas de 6 caracteres)");
      } else if (error.code === "auth/email-already-in-use") {
        setError("El correo ya esta en uso");
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
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button>Registrar</button>
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
