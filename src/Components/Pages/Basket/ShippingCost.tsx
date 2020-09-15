import React from "react";

interface IProps {
  total: string;
}

export const ShippingCost = ({ total }: IProps) => {
  return <h5 className="shipping-cost">Shipping: {total}</h5>;
};
