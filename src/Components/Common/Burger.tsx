import React from "react";
import styled from "@emotion/styled";

import { mobileBreakpoint } from "../../constants";

const BurgerSlice = styled.div`
  width: var(--spacing-4);
  height: var(--line-thickness);
  background-color: var(--main-text-colour);
  margin: 3px 0;
`;

const Button = styled.button`
  display: none;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    display: block;
  }
`;

type BurgerProps = {
  onClick: () => void;
};

export const Burger: React.FC<BurgerProps> = ({ onClick }) => (
  <Button aria-label="Site Menu" onClick={onClick}>
    <BurgerSlice />
    <BurgerSlice />
    <BurgerSlice />
  </Button>
);
