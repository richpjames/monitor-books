import React from "react";
import styled from "styled-components/macro";

import { ShippingCost } from "./ShippingCost";

import { text } from "../../../constants/";
import { twoDecimalPlaces } from "../../../utils";

const ShippingLabel = styled.label`
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  color: ${text};
`;

const ShippingSelector = styled.select`
  width: 7.5rem;
`;
interface Props {
  setShipping: (index: number) => void;
  shipping: Shipping;
  shippingOptions: Shipping[];
}

export const Shipping: React.FC<Props> = ({
  setShipping,
  shipping,
  shippingOptions,
}) => {
  return (
    <>
      <ShippingLabel htmlFor="shipping">Postal region:</ShippingLabel>
      <ShippingSelector
        onChange={(event) => {
          setShipping(+event.target.value);
        }}
      >
        {shippingOptions.map((shippingRegion, index) => (
          <option value={index} key={index}>
            {shippingRegion.region}
          </option>
        ))}
      </ShippingSelector>
      <ShippingCost total={`${twoDecimalPlaces(shipping.price)}`} />
    </>
  );
};
