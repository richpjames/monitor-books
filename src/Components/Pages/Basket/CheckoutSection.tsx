import React from "react";
import styled from "styled-components";

import { twoDecimalPlaces } from "../../../utils";

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
  total: string;
}

export const CheckoutSection: React.FC<Props> = ({
  hasItems,
  onCheckoutClicked,
  setShipping,
  shipping,
  shippingOptions,
  total,
}) => {
  return (
    <CheckoutSectionWrap>
      <Shipping
        shipping={shipping}
        setShipping={setShipping}
        shippingOptions={shippingOptions}
      />
      <BasketTotal total={`${twoDecimalPlaces(+total + shipping.price)}`} />
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
