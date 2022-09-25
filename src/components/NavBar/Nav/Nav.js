import React from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../../CartWidget/CartWidget";

export const Nav = ({ category }) => {
  return (
    <>
      <nav>
        {category.map((category) => {
          return (
            <Link className="links" key={category.id} to={category.route}>
              {category.nombre}
            </Link>
          );
        })}
        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </>
  );
};
