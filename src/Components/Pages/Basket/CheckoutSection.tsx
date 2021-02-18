import React from "react";
import styled from "styled-components";

import { Shipping } from "./Shipping";
import { CTAButton } from "../../Common/";
import { BasketTotal } from "./BasketTotal";

const CheckoutSectionWrap = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  setShipping: (index: number) => void;
  shipping: Shipping;
  shippingOptions: Shipping[];
  onCheckoutClicked: (click: React.MouseEvent) => void;
  hasItems: boolean;
  total: number;
}

export const CheckoutSection: React.FC<Props> = ({
  hasItems,
  onCheckoutClicked,
  setShipping,
  shipping,
  shippingOptions,
  total,
}) => {
  const grandTotal = (total + shipping.price).toString();
  return (
    <CheckoutSectionWrap>
      <Shipping
        shipping={shipping}
        setShipping={setShipping}
        shippingOptions={shippingOptions}
      />
      <BasketTotal total={grandTotal} />
      <CTAButton
        onClick={onCheckoutClicked}
        disabled={!hasItems}
        id="checkout-button"
      >
        Checkout
      </CTAButton>
    </CheckoutSectionWrap>
  );
};
