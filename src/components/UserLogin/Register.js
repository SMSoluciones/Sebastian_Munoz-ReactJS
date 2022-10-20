import React, { useState } from "react";
import { useCustomContext } from "../../Context/CustomContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { signUp } = useCustomContext();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handlechange = ({ target: { name, value } }) => {
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
      <div>{error && <p>{error}</p>}</div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handlechange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlechange}
        />
        <button>Registrar</button>
      </form>
    </>
  );
};
