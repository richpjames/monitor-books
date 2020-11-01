import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { connect, useDispatch } from "react-redux";

import { shippingCosts } from "../../../constants";
import {
  CHECKOUT_FAILURE,
  CHECKOUT_INITIALISE,
} from "../../../constants/actionTypes";

import { getTotal } from "../../../reducers";
import Basket from "./Basket";
import { checkout, setShipping, setLoading } from "../../../actions/index";
import { setTimeout } from "timers";

interface BasketContainerProps extends RouteComponentProps {
  checkout: (products: { [key: string]: number }) => void;
  hasError: boolean;
  hasItems: boolean;
  loading: boolean;
  productIds: string[];
  productsById: { [key: string]: Product };
  quantityById: { [key: string]: number };
  setLoading: (loading: boolean) => void;
  setShipping: (shipping: Shipping) => void;
  shipping: Shipping;
  shippingCosts: Shipping[];
  total: string;
}

const BasketContainer = ({
  checkout,
  hasError,
  hasItems,
  loading,
  productIds,
  productsById,
  quantityById,
  setLoading,
  setShipping,
  shipping,
  shippingCosts,
  total,
}: BasketContainerProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: CHECKOUT_INITIALISE });
    setLoading(false);
  }, [dispatch, setLoading]);

  const handleShippingChange = (index: number) => {
    setShipping(shippingCosts[index]);
  };

  const onCheckoutClicked = () => {
    setLoading(true);
    checkout(quantityById);
    setTimeout(() => {
      dispatch({ type: CHECKOUT_FAILURE });
    }, 5000);
  };

  return (
    <Basket
      total={total}
      hasItems={hasItems}
      hasError={hasError}
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
  hasError: state.cart.hasError,
  loading: state.cart.loading,
});

export default connect(mapStateToProps, { checkout, setShipping, setLoading })(
  BasketContainer
);
