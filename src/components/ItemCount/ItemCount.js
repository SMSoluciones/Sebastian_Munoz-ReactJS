import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicio, stock, onAdd }) => {
  const [count, setCount] = useState(inicio);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="contador">
        <button
          disabled={count <= inicio}
          onClick={restar}
          className="sumarRestar"
        >
          -
        </button>
        <span className="numero">{count}</span>
        <button
          disabled={count >= stock}
          onClick={sumar}
          className="sumarRestar"
        >
          +
        </button>
      </div>
      <div className="contenedor_agregar">
        <button
          disabled={stock <= 0}
          onClick={() => {
            onAdd(count);
          }}
          className="agregar"
        >
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
