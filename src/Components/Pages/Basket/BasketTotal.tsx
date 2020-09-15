import React from "react";
import styled from "styled-components/macro";

const TotalWrapper = styled.h3`
  padding-top: 1rem;
  text-align: center;
`;

export const BasketTotal = ({ total }: { total: string }) => {
  return <TotalWrapper className="basket-total">Total: £{total}</TotalWrapper>;
};
