import React from "react";
import logo from "../assets/logo.png";
import "./NavBar.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { CartWidget } from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <div className="contacto_directo">
        <InstagramIcon fontSize="medium" sx={{ color: "gray" }} />
        <WhatsAppIcon fontSize="medium" sx={{ color: "gray" }} />
      </div>

      <header>
        <img className="logo" src={logo} alt="" />
        <nav>
          <ul>
            <a href="http://">
              <li>PASTAS</li>
            </a>
            <a href="http://">
              <li>TARTAS</li>
            </a>
            <a href="http://">
              <li>EMPANADAS</li>
            </a>
            <a href="http://">
              <li>CONTACTO</li>
            </a>
            <CartWidget />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
