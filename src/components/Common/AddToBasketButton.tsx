import React from "react";
import styled from "styled-components/macro";
import { navigate } from "gatsby";
import { connect } from "react-redux";

import { background, text } from "../../constants";
import { addToBasket } from "../../state/actions";

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
  cartQuantity: number;
  inventoryQuantity: number;
  addToBasket: (id: string) => void;
  id: string;
  borderColour: string;
  publishedDate: Date;
}

const AddToBasketButton: React.FC<AddToBasketButtonProps> = ({
  cartQuantity,
  inventoryQuantity,
  addToBasket,
  id,
  borderColour,
  publishedDate,
}) => {
  const inCart = cartQuantity > 0;

  let buttonMessage = "Add to basket";

  if (new Date(publishedDate).getTime() > new Date().getTime()) {
    buttonMessage = "Pre-order";
  }

  let onClick = () => {
    if (!inCart) return addToBasket(id);
    else return navigate("/basket");
  };

  if (inCart) {
    buttonMessage = "In basket";
    onClick = () => navigate("/basket");
  } else if (inventoryQuantity < 1) {
    buttonMessage = "Out of stock";
  }

  return (
    <ButtonWrapper>
      <ButtonStyles
        onClick={onClick}
        disabled={false}
        className="add-to-basket"
        borderColour={borderColour}
      >
        {buttonMessage}
      </ButtonStyles>
    </ButtonWrapper>
  );
};

const mapStateToProps = (state: State, { id }: { id: string }) => ({
  cartQuantity: state.cart.quantityById[id],
  inventoryQuantity: state.products.byId[id].inventory,
  id: id,
  publishDate: state.products.byId[id].publishedDate,
});

export default connect(mapStateToProps, { addToBasket })(AddToBasketButton);
