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

interface IProps extends RouteComponentProps {
  products: [];
  total: string;
  checkout: (products: []) => void;
}

const BasketContainer = ({ products, total, checkout }: IProps) => {
  return (
    <div>
      <BasketTitle>Basket</BasketTitle>
      <Basket
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)}
      />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  products: getCartProducts(state),
  total: getTotal(state),
});

export default connect(mapStateToProps, { checkout })(BasketContainer);
