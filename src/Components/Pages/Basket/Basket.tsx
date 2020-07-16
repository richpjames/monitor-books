import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { AmericaTitle } from "../../Common/Titles";
import BasketList from "./BasketList";

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
      <BasketList />
    </div>
  );
};

export default Basket;
