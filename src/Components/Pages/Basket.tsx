import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { AmericaTitle } from "../Common/Titles";

const BasketTitle = styled(AmericaTitle)`
  width: 100%;
  text-align: center;
  display: block;
`;

interface IProps extends RouteComponentProps {}

const Basket = (props: IProps) => {
  return (
    <div>
      <BasketTitle>Basket</BasketTitle>
    </div>
  );
};

export default Basket;
