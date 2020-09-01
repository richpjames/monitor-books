import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  width: 6rem;
`;

const Quantity = styled.span`
  width: 100%;
  text-align: center;
`;

const Button = styled.button``;

interface IProps {
  addToCart: (event: React.MouseEvent) => void;
  decrementInCart: (event: React.MouseEvent) => void;
  addButtonMessage: string;
  outOfStock: boolean;
  quantity: number;
}
export const QuantityPanel = ({
  addToCart,
  decrementInCart,
  addButtonMessage,
  outOfStock,
  quantity,
}: IProps) => (
  <>
    Quantity:
    <Wrapper>
      <Button onClick={addToCart} disabled={outOfStock}>
        {addButtonMessage}
      </Button>
      <Quantity>{quantity}</Quantity>
      <Button onClick={decrementInCart} disabled={quantity <= 0}>
        -
      </Button>
    </Wrapper>
  </>
);
