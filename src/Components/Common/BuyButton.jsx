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

function BuyButton({ addToBasket, product, cartQuantityById }) {
  //if inventory is > 0 and not in basket return "Add to basket"
  //else if quantity in cart is > 0 return "In basket"
  //else return out of stock
  let message;

  if (product.inventory > 0 && !cartQuantityById[product.id]) {
    message = "Add to basket";
  } else if (cartQuantityById[product.id] > 0) {
    message = "In basket";
  } else message = "Out of stock";

  return (
    <Button onClick={addToBasket} disabled={product.inventory > 0 && true}>
      {message}
    </Button>
  );
}

const mapStateToProps = (state) => ({
  cartQuantityById: state.cart.quantityById,
});

export default connect(mapStateToProps)(BuyButton);
