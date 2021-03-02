import React from "react";
import styled from "styled-components/macro";

const ShippingCostWrapper = styled.h5`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

interface Props {
  total: string;
}

export const ShippingCost: React.FC<Props> = ({ total }) => {
  return (
    <ShippingCostWrapper id="shipping-cost">
      Shipping: £{total}
    </ShippingCostWrapper>
  );
};
