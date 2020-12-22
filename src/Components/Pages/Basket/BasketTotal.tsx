import React from "react";
import styled from "styled-components/macro";

import { text } from "../../../constants";

const TotalWrapper = styled.h3`
  text-align: center;
  padding-top: 0.25rem;
  border-top: 1px solid ${text};
`;

export const BasketTotal = ({ total }: { total: string }) => {
  return <TotalWrapper id="basket-total">Total: £{total}</TotalWrapper>;
};
