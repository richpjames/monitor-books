import React from "react";
import styled from "styled-components/macro";

import { text, background } from "../../../constants";

const Wrap = styled.section`
  display: flex;
  padding-bottom: 2.5rem;
  margin-top: auto;
  width: 10rem;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    width: 100%;
    margin-top: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 1rem;
  height: 1.5rem;
  @media only screen and (max-width: 600px) {
  }
`;

const Quantity = styled.h5`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: ${text};
`;

const QuantityLabel = styled(Quantity)``;

const Button = styled.button`
  color: ${text};
  border: 1px solid ${text};
  background: ${background};
  line-height: 1px;
`;

const InnerButtonContent = styled.span`
  line-height: 1px;
`;
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
    <QuantityLabel>Quantity:</QuantityLabel>
    <ButtonWrapper>
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
    </ButtonWrapper>
  </Wrap>
);
