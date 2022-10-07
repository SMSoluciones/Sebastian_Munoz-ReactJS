import React from "react";
import Item from "../Item/Item";
import styled from "styled-components";

const ItemList = ({ listProducts }) => {
  // console.log(listProducts) //Test;
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
  width: auto;
  justify-content: center;
  margin: 30px;
  padding: 50px;
  border-radius: 20px;
  flex-wrap: wrap;
}
`;
