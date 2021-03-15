import React, { useContext } from "react";
import styled from "styled-components/macro";
import { navigate } from "gatsby";

import { CartContext } from "../../state/CartProvider";

const ButtonStyles = styled.button<{ borderColour: string }>`
  width: 150px;
  height: 40px;
  background: var(--button-colour);
  color: var(--product-background-colour);
  border: 0;
`;

const ButtonWrapper = styled.div`
  padding-top: 1rem;
`;

interface AddToBasketButtonProps {
  id: string;
  borderColour: string;
  publishedDate: Date;
}

export const AddToBasketButton: React.FC<AddToBasketButtonProps> = ({
  id,
  borderColour,
  publishedDate,
}) => {
  const context = useContext(CartContext);
  if (context.get && context.add && context.available) {
    const { get, available, add } = context;

    const inCart = get(id) > 0;
    const outOfStock = !available(id, 1);
    let buttonMessage = "Add to basket";

    if (new Date(publishedDate).getTime() > new Date().getTime()) {
      buttonMessage = "Pre-order";
    }

    let onClick = () => {
      if (!inCart) return add(id);
      else return navigate("/basket");
    };

    if (inCart) {
      buttonMessage = "In basket";
      onClick = () => navigate("/basket");
    } else if (outOfStock) {
      buttonMessage = "Out of stock";
    }

    return (
      <ButtonWrapper>
        <ButtonStyles
          onClick={onClick}
          disabled={outOfStock || inCart}
          className="add-to-basket"
          borderColour={borderColour}
        >
          {buttonMessage}
        </ButtonStyles>
      </ButtonWrapper>
    );
  } else {
    return <></>;
  }
};
