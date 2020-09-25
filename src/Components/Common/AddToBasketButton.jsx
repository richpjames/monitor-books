import React from "react";
import styled from "styled-components/macro";
import { navigate } from "@reach/router";
import { connect } from "react-redux";

import { addToBasket } from "../../actions";

const ButtonStyles = styled.button`
  width: 150px;
  height: 40px;
`;

const ButtonWrapper = styled.div`
  padding-top: 1rem;
`;

const AddToBasketButton = ({
  cartQuantity,
  inventoryQuantity,
  addToBasket,
  id,
}) => {
  let buttonMessage = "Add to basket";

  if (cartQuantity > 0) {
    buttonMessage = "In basket";
  } else if (inventoryQuantity < 1) {
    buttonMessage = "Out of stock";
  }

  return (
    <ButtonWrapper>
      <ButtonStyles
        onClick={
          cartQuantity > 0 ? () => navigate("basket") : () => addToBasket(id)
        }
        disabled={false}
        className="add-to-basket"
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
