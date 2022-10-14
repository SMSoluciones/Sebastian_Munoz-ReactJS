import React from "react";
import Item from "../Item/Item";
import styled from "styled-components";

const ItemList = ({ listProducts }) => {
  return (
    <>
      <ItemContainer>
        {listProducts.map((prod, i) => (
          <Item key={`${prod.product}-${i}`} product={prod} />
        ))}
      </ItemContainer>
    </>
  );
};

export default ItemList;

const ItemContainer = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-content:center;
  border-radius: 20px;
  flex-wrap: wrap;
}
`;
