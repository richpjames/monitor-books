import React from "react";
import styled from "@emotion/styled";

import { mobileBreakpoint } from "../../constants";

const Wrap = styled.div`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  grid-area: quantity;
  padding-top: var(--spacing-1);
  height: var(--spacing-5);
  width: initial;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    margin-right: auto;
    width: 100%;
  }
`;

const Quantity = styled.span`
  margin-left: var(--spacing-1);
  margin-right: var(--spacing-1);
`;

const Button = styled.button`
  background-color: var(--basket-background-colour);
  border: none;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    flex: 1;
  }
`;

const InnerButtonContent = styled.span``;
interface QuantityPanelProps {
  addToCart: (event: React.MouseEvent) => void | any;
  decrementInCart: (event: React.MouseEvent) => void | any;
  outOfStock: boolean;
  quantity: number;
  label: string;
}

export const QuantityPanel: React.FC<QuantityPanelProps> = ({
  addToCart,
  decrementInCart,
  outOfStock,
  quantity,
  label,
}) => (
  <Wrap className="item-quantity-container" id={`${label}-quantity-panel`}>
    <Button
      onClick={decrementInCart}
      disabled={quantity <= 0}
      id={`${label}-decrease-quantity-button`}
    >
      <InnerButtonContent>-</InnerButtonContent>
    </Button>
    <Quantity id={`${label}-quantity`} className="item-quantity-number">
      {quantity}
    </Quantity>
    <Button
      id={`${label}-increase-quantity-button`}
      onClick={addToCart}
      disabled={outOfStock}
    >
      <InnerButtonContent>+</InnerButtonContent>
    </Button>
  </Wrap>
);
