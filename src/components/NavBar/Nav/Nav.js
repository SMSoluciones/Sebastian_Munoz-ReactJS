import React from "react";
import "../Nav/Nav.css";

export const Nav = ({ category }) => {
  return (
    <>
      <nav>
        {category.map((category) => {
          return (
            <a
              className="links"
              key={category.id}
              href="http://www.compucalitv.com"
            >
              {category.nombre}
            </a>
          );
        })}
      </nav>
    </>
  );
};
