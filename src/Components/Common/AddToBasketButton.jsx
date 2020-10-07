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
  let buttonMessage = "Add to basket";
  const inCart = cartQuantity > 0;

  if (inCart) {
    buttonMessage = "In basket";
  } else if (inventoryQuantity < 1) {
    buttonMessage = "Out of stock";
  }

  return (
    <ButtonWrapper>
      <ButtonStyles
        onClick={() =>
          inCart ? () => navigate(linkTo) : () => addToBasket(id)
        }
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
