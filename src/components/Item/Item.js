import React from "react";
import "../Item/Item.css";

const Item = () => {
  return (
    <div className="item">
      <img src="" alt="" />
      <h3>Nombre</h3>
      <p>Descripcion</p>
      <h4>Precio</h4>
      <p>Categoria</p>
      <button>Ver mas</button>
    </div>
  );
};

export default Item;
