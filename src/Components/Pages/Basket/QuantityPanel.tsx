import React from "react";
import styled from "styled-components/macro";

import { text, background } from "../../../constants/index";

const Wrap = styled.section`
  display: flex;
  padding-bottom: 2.5rem;
  margin-top: auto;
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
interface Props {
  addToCart: (event: React.MouseEvent) => void;
  decrementInCart: (event: React.MouseEvent) => void;
  outOfStock: boolean;
  quantity: number;
}

export const QuantityPanel = ({
  addToCart,
  decrementInCart,
  outOfStock,
  quantity,
}: Props) => (
  <Wrap className="item-quantity-container">
    <QuantityLabel>Quantity:</QuantityLabel>
    <ButtonWrapper>
      <Button onClick={decrementInCart} disabled={quantity <= 0}>
        <InnerButtonContent>-</InnerButtonContent>
      </Button>
      <Quantity className="item-quantity-number">{quantity}</Quantity>
      <Button onClick={addToCart} disabled={outOfStock}>
        <InnerButtonContent>+</InnerButtonContent>
      </Button>
    </ButtonWrapper>
  </Wrap>
);
