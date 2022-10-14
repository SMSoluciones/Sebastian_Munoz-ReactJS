import React from "react";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Nav } from "./Nav/Nav";
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
      <SocialBar>
        <InstagramIcon fontSize="medium" sx={{ color: "gray" }} />
        <WhatsAppIcon fontSize="medium" sx={{ color: "gray" }} />
      </SocialBar>

      <StyledHeader>
        <Nav category={category} />
      </StyledHeader>
    </>
  );
};

export default NavBar;

const StyledHeader = styled.header`
  margin-bottom: 80px;
`;

const SocialBar = styled.div`
  display: flex;
  background-color: black;
  height: 40px;
  justify-content: right;
  padding-right: 10%;
  align-items: center;
`;
