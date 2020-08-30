import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";
import { connect } from "react-redux";

import { getTotal } from "../../../reducers";
import { AmericaTitle } from "../../Common/Titles";
import Basket from "./Basket";
import { checkout } from "../../../actions/index";

const LoadingSpinner = styled.div`
  height: 100px;
  width: 100px;
  background-color: pink;
`;
const BasketTitle = styled(AmericaTitle)`
  width: 100%;
  text-align: center;
  display: block;
`;

interface IProps extends RouteComponentProps {
  total: string;
  checkout: (products: { [key: string]: number }) => void;
  productIds: string[];
  productsById: { [key: string]: Book };
  quantityById: { [key: string]: number };
}

const BasketContainer = ({
  productIds,
  productsById,
  total,
  quantityById,
  checkout,
}: IProps) => {
  const [loading, setLoading] = useState(false);

  const onCheckoutClicked = () => {
    setLoading(true);
    checkout(quantityById);
  };

  return !loading ? (
    <div>
      <BasketTitle>Basket</BasketTitle>
      <Basket
        total={total}
        onCheckoutClicked={onCheckoutClicked}
        productsById={productsById}
        productIds={productIds}
        quantityById={quantityById}
      />
    </div>
  ) : (
    <LoadingSpinner />
  );
};

const mapStateToProps = (state: State) => ({
  total: getTotal(state),
  productIds: state.cart.addedIds,
  quantityById: state.cart.quantityById,
  productsById: state.products.byId,
});

export default connect(mapStateToProps, { checkout })(BasketContainer);
