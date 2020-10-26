import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { connect } from "react-redux";

import { getTotal } from "../../../reducers";
import Basket from "./Basket";
import { checkout, setShipping } from "../../../actions/index";
import { shippingCosts } from "../../../constants";

interface IProps extends RouteComponentProps {
  checkout: (products: { [key: string]: number }) => void;
  hasItems: boolean;
  productIds: string[];
  productsById: { [key: string]: Product };
  quantityById: { [key: string]: number };
  setShipping: (shipping: Shipping) => void;
  shipping: Shipping;
  shippingCosts: Shipping[];
  total: string;
}

const BasketContainer = ({
  checkout,
  hasItems,
  productIds,
  productsById,
  quantityById,
  setShipping,
  shipping,
  shippingCosts,
  total,
}: IProps) => {
  const [loading, setLoading] = useState(false);
  const handleShippingChange = (index: number) => {
    setShipping(shippingCosts[index]);
  };

  const onCheckoutClicked = () => {
    setLoading(true);
    checkout(quantityById);
  };

  return (
    <Basket
      total={total}
      hasItems={hasItems}
      onCheckoutClicked={onCheckoutClicked}
      productsById={productsById}
      productIds={productIds}
      quantityById={quantityById}
      loading={loading}
      shipping={shipping}
      shippingOptions={shippingCosts}
      setShipping={handleShippingChange}
    />
  );
};

const mapStateToProps = (state: State) => ({
  total: getTotal(state),
  hasItems: +getTotal(state) > 0,
  productIds: state.cart.addedIds,
  quantityById: state.cart.quantityById,
  productsById: state.products.byId,
  shipping: state.cart.shipping,
  shippingCosts: shippingCosts,
});

export default connect(mapStateToProps, { checkout, setShipping })(
  BasketContainer
);
