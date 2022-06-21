import React, { useContext } from "react";
import styled from "@emotion/styled";
import { navigate } from "gatsby";

import { CartContext } from "../../state/CartProvider";

const Button = styled.button`
  background-color: var(--button-colour);
  color: var(--current-background-colour);
  padding: var(--spacing-2);
  width: var(--spacing-8);
`;

const ButtonWrapper = styled.div`
  padding-top: 1rem;
  margin-left: auto;
  margin-right: auto;
`;

interface AddToBasketButtonProps {
  id: string;
  preorder: boolean;
}

export const AddToBasketButton: React.FC<AddToBasketButtonProps> = ({
  id,
  preorder,
}) => {
  const context = useContext(CartContext);
  if (context.get && context.add && context.available) {
    const { get, available, add } = context;

    const inCart = get(id) > 0;
    const outOfStock = !available(id, 1);
    let buttonMessage = "Add to basket";

    let onClick = () => {
      add(id);
      navigate("/basket");
    };

    if (preorder && !inCart) {
      buttonMessage = "Pre-order";
    } else if (inCart) {
      buttonMessage = "In basket";
      onClick = () => navigate("/basket");
    } else if (outOfStock) {
      buttonMessage = "Out of stock";
    }

    return (
      <ButtonWrapper>
        <Button
          onClick={onClick}
          disabled={outOfStock || inCart}
          className="add-to-basket"
        >
          {buttonMessage}
        </Button>
      </ButtonWrapper>
    );
  } else {
    return <></>;
  }
};
