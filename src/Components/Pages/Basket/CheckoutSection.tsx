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
  const {
    shipping,
    setShipping,
    hasItems,
    total,
    onCheckoutClicked,
  } = useContext(CartContext);
  const grandTotal = total + shipping.price;
  return (
    <CheckoutSectionWrap>
      <Shipping
        shipping={shipping}
        setShipping={setShipping}
        shippingOptions={shippingCosts}
      />
      <BasketTotal total={grandTotal} />
      <CTAButton
        onClick={onCheckoutClicked}
        disabled={false}
        id="checkout-button"
      >
        Checkout
      </CTAButton>
    </CheckoutSectionWrap>
  );
};
