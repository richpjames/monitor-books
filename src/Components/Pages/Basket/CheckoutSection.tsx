import React, { useContext } from "react";
import styled from "styled-components";

import { Shipping } from "./Shipping";
import { CTAButton } from "../../Common";
import { BasketTotal } from "./BasketTotal";
import { CartContext } from "../../../state/CartProvider";
import { shippingCosts } from "../../../constants";
const CheckoutSectionWrap = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <BasketTotal total={grandTotal} />
      <CTAButton
        onClick={cartContext.onCheckoutClicked}
        disabled={false}
        id="checkout-button"
      >
        Checkout
      </CTAButton>
    </CheckoutSectionWrap>
  );
};
