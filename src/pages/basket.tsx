import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { connect, useDispatch } from "react-redux";

import { shippingCosts } from "../constants";
import {
  CHECKOUT_FAILURE,
  CHECKOUT_INITIALISE,
} from "../state/actions/actionTypes";

import { getTotal } from "../state/reducers/";
import Basket from "../Components/Pages/Basket/Basket";
import { checkout, setShipping, setLoading } from "../state/actions/";
import { setTimeout } from "timers";

interface BasketContainerProps extends RouteComponentProps {
  checkout: (products: { [key: string]: number }) => void;
  setLoading: (loading: boolean) => void;
  setShipping: (shipping: Shipping) => void;
  hasError: boolean;
  hasItems: boolean;
  loading: boolean;
  productIds: string[];
  productsById: ById<Product>;
  quantityById: ProductQuantityById;
  shipping: Shipping;
  shippingCosts: Shipping[];
  total: number;
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
    setTimeout(() => {
      dispatch({ type: CHECKOUT_INITIALISE });
    }, 10000);
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

const mapStateToProps = (state: State) => {
  const { cart, products } = state;
  return {
    hasError: cart.config.hasError,
    hasItems: getTotal(state) > 0,
    loading: cart.loading,
    productIds: cart.addedIds,
    productsById: products.byId,
    quantityById: cart.quantityById,
    shipping: cart.shipping,
    shippingCosts: shippingCosts,
    total: getTotal(state),
  };
};

export default connect(mapStateToProps, { checkout, setShipping, setLoading })(
  BasketContainer
);
