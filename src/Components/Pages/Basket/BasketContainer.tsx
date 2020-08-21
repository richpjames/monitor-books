import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";
import { connect } from "react-redux";

// import { checkout } from "../../../actions";
import { getTotal, getCartProducts } from "../../../reducers";
import { AmericaTitle } from "../../Common/Titles";
import Basket from "./Basket";

const BasketTitle = styled(AmericaTitle)`
  width: 100%;
  text-align: center;
  display: block;
`;

interface IProps extends RouteComponentProps {
  products: string[];
  total: string;
  // checkout: (products: []) => void;
  productIds: string[];
  productsById: { [key: string]: Book };
  quantityById: { [key: string]: number };
}

const BasketContainer = ({
  productIds,
  productsById,
  products,
  total,
  quantityById,
}: // checkout,
IProps) => {
  return (
    <div>
      <BasketTitle>Basket</BasketTitle>
      <Basket
        total={total}
        // onCheckoutClicked={() => checkout(products)}
        productsById={productsById}
        productIds={productIds}
        quantityById={quantityById}
      />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  productIds: state.cart.addedIds,
  productsById: state.products.byId,
  quantityById: state.cart.quantityById,
});

export default connect(mapStateToProps)(BasketContainer);
