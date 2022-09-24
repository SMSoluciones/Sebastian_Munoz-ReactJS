import React from "react";
import logo from "../../assets/logo.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Nav } from "./Nav/Nav";

const NavBar = () => {
  //Categorias Dinamicas
  const category = [
    { id: 1, nombre: "PASTAS" },
    { id: 2, nombre: "TARTAS" },
    { id: 3, nombre: "EMPANADAS" },
    { id: 4, nombre: "PIZZAS" },
  ];
  return (
    <>
      <div className="contacto_directo">
        <InstagramIcon fontSize="medium" sx={{ color: "gray" }} />
        <WhatsAppIcon fontSize="medium" sx={{ color: "gray" }} />
      </div>

      <header>
        <img className="logo" src={logo} alt="" />
        <Nav category={category} />
      </header>
    </>
  );
};

export default NavBar;
