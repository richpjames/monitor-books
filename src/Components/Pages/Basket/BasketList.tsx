import React from "react";
import styled from "styled-components/macro";

import BasketListItem from "./BasketListItem";

const BasketListContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BasketList = () => {
  return (
    <BasketListContainer>
      <p>Total: $20</p>
    </BasketListContainer>
  );
};

export default BasketList;
