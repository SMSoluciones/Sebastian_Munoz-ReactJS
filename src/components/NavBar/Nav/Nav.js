import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../../CartWidget/CartWidget";
import logo from "../../../assets/logo.svg";
import styled from "styled-components";

export const Nav = ({ category }) => {
  return (
    <>
      <NavStyled>
        <Link to="/">
          <img src={logo} alt="angelo-logo" />
        </Link>
        {category.map((category) => {
          return (
            <Link className="links" key={category.id} to={category.route}>
              {category.nombre}
            </Link>
          );
        })}
        <Link className="cart" to="/cart">
          <CartWidget />
        </Link>
      </NavStyled>
    </>
  );
};

const NavStyled = styled.nav`
  display: flex;
  background-color: rgb(23, 22, 22);
  justify-content: center;
  height: 80px;
  width: 100%;

  img {
    height: 150px;
    width: 200px;
    filter: drop-shadow(3px 3px 3px black);
    position: relative;
    top: -30%;
    right: 20%;
  }

  .links {
    display: flex;
    flex-direction: row;
    margin: 20px;
    color: white;
    align-items: center;
  }

  .links:hover {
    color: rgb(143, 141, 141);
  }
  .cart {
    display: flex;
    align-self: center;
  }
`;
