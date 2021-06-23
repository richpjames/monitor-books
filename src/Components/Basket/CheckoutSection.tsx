import React, { useContext } from "react";
import styled from "styled-components/macro";

import { Shipping } from "./Shipping";
import { CartContext } from "../../state/CartProvider";
import { shippingCosts, mobileBreakpoint } from "../../constants";

const CheckoutSectionWrap = styled.section`
  padding-top: var(--spacing-7);
  display: grid;
  grid-template-areas:
    "shipping-label shipping-selector"
    ".                 shipping-cost"
    ".                 total"
    ".                 checkout-button";
  grid-template-columns: var(--spacing-9) var(
      --spacing-9
    );
  grid-template-rows: var(--spacing-10) 1fr 1fr 1fr;
  margin-left: auto;
  width: var(--spacing-12);
  text-align: end;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    grid-template-areas: "shipping-label"
                         "shipping-selector"
                         "shipping-cost"
                         "total"
                         "checkout-button";
    grid-template-columns: 100%;
    width: 100%;
}
`;

const TotalWrapper = styled.h4`
  padding-top: 0.25rem;
  grid-area: total;
  border-top: var(--line-thickness) solid var(--main-border-colour);
`;

const ButtonWrapper = styled.div`
  grid-area:checkout-button;
  display: flex;
  width: 100%;
  height: var(--spacing-6);
`;

const Button = styled.button`
 flex: 1;
 background-color: var(--button-colour);
 color: var(--current-background-colour);
 width: var(--spacing-8);
`;

export const CheckoutSection: React.FC = () => {
  const cartContext = useContext(CartContext);

  const calculateGrandTotal = () => {
    if (cartContext.total && cartContext.shipping) {
      return cartContext?.total + cartContext?.shipping.price;
    } else {
      return 0;
    }
  };
  const grandTotal = calculateGrandTotal();

  return (
    <CheckoutSectionWrap>
      <Shipping
        shipping={cartContext.shipping}
        setShipping={cartContext.setShipping}
        shippingOptions={shippingCosts}
      />
      <TotalWrapper id="basket-total">
        <i>Total:</i> £{(Math.round(grandTotal * 100) / 100).toFixed(2)}
      </TotalWrapper>
      <ButtonWrapper>
        <Button
          onClick={cartContext.onCheckoutClicked}
          disabled={false}
          id="checkout-button"
        >
          Checkout
        </Button>
      </ButtonWrapper>
    </CheckoutSectionWrap>
  );
};
