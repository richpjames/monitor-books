import React, { useContext } from "react";
import styled from "styled-components/macro";
import { navigate } from "gatsby";

import { background, text } from "../../constants";
import { CartContext } from "../../state/CartProvider";

const ButtonStyles = styled.button<{ borderColour: string }>`
  width: 150px;
  height: 40px;
  background: ${background};
  color: ${text};
  border: ${({ borderColour }) =>
    `1px solid ${borderColour ? borderColour : text}`};
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
  const { get, add, available } = useContext(CartContext);

  const inCart = get(id) > 0;
  const outOfStock = !available(id);
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
};
