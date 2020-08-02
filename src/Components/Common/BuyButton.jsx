import React from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";

//USED TO CREATE BUTTON IMG
// const FullWidthWrap = styled.div`
//   margin-left: 4%;
//   margin-right: 4%;
//   @media only screen and (max-width: 600px) {
//     padding-bottom: 5%;
//   }
// `;
// const BuyBackground = styled.div`
//   background-color: black;
//   height: 40px;
//   width: 150px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 2vw;
//   position: relative;
// `;
// const BuyText = styled.p`
//   color: white;
//   position: absolute;
//   top: 14%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
const Button = styled.button`
  width: 150px;
  height: 40px;
`;

function BuyButton({
  addToBasket,
  productId,
  cartQuantityById,
  inventoryQuantity,
}) {
  //if inventory is > 0 and not in basket return "Add to basket"
  //else if quantity in cart is > 0 return "In basket"
  //else return out of stock
  let message;
  let disabled;
  if (inventoryQuantity > 0 && !cartQuantityById[productId]) {
    message = "Add to basket";
    disabled = false;
  } else if (cartQuantityById[productId] > 0) {
    message = "In basket";
    disabled = true;
  } else {
    message = "Out of stock";
    disabled = true;
  }

  return (
    <Button onClick={addToBasket} disabled={inventoryQuantity > 0}>
      {message}
    </Button>
  );
}

const mapStateToProps = (state, ownProps) => ({
  cartQuantityById: state.cart.quantityById,
  inventoryQuantity: state.products.byId[ownProps.productId],
});

export default connect(mapStateToProps)(BuyButton);
