import React from "react";
import styled from "styled-components/macro";

const Wrap = styled.section`
  display: flex;
  padding-bottom: 1rem;
  margin-top: auto;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    width: 100%;
    margin-top: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 6rem;
  @media only screen and (max-width: 600px) {
  }
`;

const Quantity = styled.h5`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
const QuantityLabel = styled(Quantity)``;
const Button = styled.button``;

interface IProps {
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
}: IProps) => (
  <Wrap className="item-quantity-container">
    <QuantityLabel>Quantity:</QuantityLabel>
    <ButtonWrapper>
      <Button onClick={decrementInCart} disabled={quantity <= 0}>
        -
      </Button>
      <Quantity className="item-quantity-number">{quantity}</Quantity>
      <Button onClick={addToCart} disabled={outOfStock}>
        +
      </Button>
    </ButtonWrapper>
  </Wrap>
);
