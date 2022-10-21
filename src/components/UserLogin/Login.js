import React, { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { login } = useAuthContext();
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

  return (
    <>
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
    </>
  );
};
