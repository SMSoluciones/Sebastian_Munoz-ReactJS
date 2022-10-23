import React, { useState } from "react";
import { useAuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";

export const Login = () => {
  const { login, loginWithGoogle } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      if (error.code === "auth/invalid-email") {
        setError("El usuario no es valido.");
      } else if (error.code === "auth/user-not-found") {
        setError("El usuario no esta registrado.");
      } else if (error.code === "auth/wrong-password") {
        setError("La contraseña es incorrecta.");
      }
    }
  };
  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
    navigate("/");
  };

  return (
    <>
      <FormContainer>
        <div>{error && <p>{error}</p>}</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>

        <Link to="/reset">
          <button>¿Olvido su contraseña?</button>
        </Link>

        <RegisterContainer>
          <button onClick={handleGoogleSignIn}>
            <GoogleIcon />
          </button>
          <Link to="/register">
            <button>Registrar</button>
          </Link>
        </RegisterContainer>
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
const RegisterContainer = styled.div`
  display: flex;
`;
