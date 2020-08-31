import React from "react";
import styled from "styled-components";

const Quantity = styled.span`
  width: 100%;
  text-align: center;
  padding-top: 15px;
`;

const Button = styled.button`
  width: 10%;
`;

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
    <Button onClick={addToCart} disabled={outOfStock}>
      {addButtonMessage}
    </Button>
    <Quantity>
      Quantity:
      {quantity}
    </Quantity>
    <Button onClick={decrementInCart} disabled={quantity <= 0}>
      -
    </Button>
  </>
);
