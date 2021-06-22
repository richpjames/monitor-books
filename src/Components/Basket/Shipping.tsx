import React from "react";
import styled from "styled-components/macro";

import { shippingCosts } from "../../constants";

const ShippingLabel = styled.label`
  padding-right: 0.5rem;
  margin-left: auto;
  grid-area: shipping-label;
  font-size: var(--font-title-medium);
  color: var(--main-text-colour);
  font-style: italic;
`;

const ShippingSelector = styled.select`
  grid-area: shipping-selector;
`;

const ShippingTotal = styled.h4`
  padding-top: 0.5rem;
  padding-bottom: var(--spacing-3);
  grid-area: shipping-cost;
`;

interface Props {
  setShipping?: (index: any) => void;
  shipping?: Shipping;
  shippingOptions?: Shipping[];
}

export const Shipping: React.FC<Props> = ({
  setShipping,
  shipping,
  shippingOptions,
}) => {
  const shippingPrice = (shipping && shipping.price) || 0;
  const total = (Math.round(shippingPrice * 100) / 100).toFixed(2) || "0";
  return (
    <>
      <ShippingLabel htmlFor="shipping">Postal region:</ShippingLabel>
      <ShippingSelector
        id="shipping-selector"
        onChange={(event) => {
          if (!setShipping) return;
          const index = +event.target.value;
          setShipping(shippingCosts[index]);
        }}
      >
        {shippingOptions &&
          shippingOptions.map((shippingRegion, index) => (
            <option value={index} key={index}>
              {shippingRegion.region}
            </option>
          ))}
      </ShippingSelector>
      <ShippingTotal id="shipping-cost">
        <i>Shipping:</i> £{total}
      </ShippingTotal>
    </>
  );
};
