import React from "react";
import styled from "styled-components/macro";
import { navigate, Link } from "@reach/router";
import { connect } from "react-redux";

import { darkGrey, purp } from "./../../constants/";
import { addToBasket } from "../../actions";

const ButtonStyles = styled.button`
  width: 150px;
  height: 40px;
  background: ${darkGrey};
  border: ${({ borderColour }) =>
    `1px solid ${borderColour ? borderColour : purp}`};
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

  if (cartQuantity > 0) {
    buttonMessage = "In basket";
  } else if (inventoryQuantity < 1) {
    buttonMessage = "Out of stock";
  }

  return (
    <Link to={linkTo}>
      <ButtonWrapper>
        <ButtonStyles
          onClick={
            cartQuantity > 0 ? () => navigate("basket") : () => addToBasket(id)
          }
          disabled={false}
          className="add-to-basket"
          borderColour={borderColour}
        >
          {buttonMessage}
        </ButtonStyles>
      </ButtonWrapper>
    </Link>
  );
};

const mapStateToProps = (state, { id }) => ({
  cartQuantity: state.cart.quantityById[id],
  inventoryQuantity: state.products.byId[id].inventory,
  id: id,
});

export default connect(mapStateToProps, { addToBasket })(AddToBasketButton);
