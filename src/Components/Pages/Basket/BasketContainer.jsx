import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";
import { connect } from "react-redux";

import { checkout } from "../../../actions";
import { getTotal, getCartProducts } from "../../../reducers";
import { AmericaTitle } from "../../Common/Titles";
import Basket from "./Basket";

const BasketTitle = styled(AmericaTitle)`
  width: 100%;
  text-align: center;
  display: block;
`;

// interface IProps extends RouteComponentProps {}

const BasketContainer = ({ products, total, checkout }) => {
  return (
    <div>
      <BasketTitle>Basket</BasketTitle>
      <Basket
        products={products}
        total={total}
        onCheckoutClick={() => checkout(products)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
});

export default connect(mapStateToProps, { checkout })(BasketContainer);
