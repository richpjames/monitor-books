import React from "react";
import styled from "styled-components/macro";

import { text } from "../../../constants";

const TotalWrapper = styled.h3`
  text-align: center;
  padding-top: 0.25rem;
  border-top: 1px solid var(--main-border-colour);
`;

export const BasketTotal = ({ total }: { total: number }) => {
  return (
    <TotalWrapper id="basket-total">
      Total: £{(Math.round(total * 100) / 100).toFixed(2)}
    </TotalWrapper>
  );
};
