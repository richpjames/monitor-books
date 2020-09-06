import React from "react";

interface IProps {
  total: string;
}

export const ShippingCost = ({ total }: IProps) => {
  return <h5>Shipping: {total}</h5>;
};
