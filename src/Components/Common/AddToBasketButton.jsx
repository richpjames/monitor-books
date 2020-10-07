import React from "react";
import styled from "styled-components/macro";
import { navigate } from "@reach/router";
import { connect } from "react-redux";

import { background, text } from "./../../constants/";
import { addToBasket } from "../../actions";

const ButtonStyles = styled.button`
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

const AddToBasketButton = ({
  cartQuantity,
  inventoryQuantity,
  addToBasket,
  id,
  borderColour,
  linkTo,
}) => {
  const inCart = cartQuantity > 0;

  let buttonMessage = "Add to basket";
  let onClick = () => addToBasket(id);

  if (inCart) {
    buttonMessage = "In basket";
    onClick = () => navigate(linkTo);
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

const mapStateToProps = (state, { id }) => ({
  cartQuantity: state.cart.quantityById[id],
  inventoryQuantity: state.products.byId[id].inventory,
  id: id,
});

export default connect(mapStateToProps, { addToBasket })(AddToBasketButton);
