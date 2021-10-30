import React, { useContext, useEffect, useState, Dispatch, SetStateAction } from "react";
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

export const CheckoutSection: React.FC<{ setLoading: Dispatch<SetStateAction<boolean>> }> = ({ setLoading }) => {
  const cart = useContext(CartContext);
  const [grandTotal, setGrandTotal] = useState(0);
  const { total, shipping, setShipping, contents, onCheckoutClicked } = cart

  const calculateGrandTotal = () => {
    if (total && shipping) {
      return total + shipping.price;
    } else if (shipping) {
      return shipping.price
    } else return 0
  };

  useEffect(() => {
    setGrandTotal(() => calculateGrandTotal())

  }, [contents, shipping])

  return (
    <CheckoutSectionWrap>
      <Shipping
        shipping={shipping}
        setShipping={setShipping}
        shippingOptions={shippingCosts}
      />
      <TotalWrapper id="basket-total">
        <i>Total:</i> £{(Math.round(grandTotal * 100) / 100).toFixed(2)}
      </TotalWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            if (!onCheckoutClicked) return
            onCheckoutClicked();
            setLoading(true);
          }}
          disabled={false}
          id="checkout-button"
        >
          Checkout
        </Button>
      </ButtonWrapper>
    </CheckoutSectionWrap >
  )
};
