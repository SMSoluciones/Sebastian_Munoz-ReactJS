import React from "react";
import logo from "../../assets/logo.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Nav } from "./Nav/Nav";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  //Categorias Dinamicas
  const category = [
    { id: 1, nombre: "PASTAS", route: "/category/pastas" },
    { id: 2, nombre: "TARTAS", route: "/category/tartas" },
    { id: 3, nombre: "EMPANADAS", route: "/category/empanadas" },
    { id: 4, nombre: "SALSAS", route: "/category/salsas" },
  ];
  return (
    <>
      <div className="contacto_directo">
        <InstagramIcon fontSize="medium" sx={{ color: "gray" }} />
        <WhatsAppIcon fontSize="medium" sx={{ color: "gray" }} />
      </div>

      <StyledHeader>
        <Link to="/">
          <img className="logo" src={logo} alt="angelo-logo" />
        </Link>
        <Nav category={category} />
      </StyledHeader>
    </>
  );
};

export default NavBar;

const StyledHeader = styled.header`
  margin-bottom: 80px;
`;
