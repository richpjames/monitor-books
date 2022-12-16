import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";

import { CartContext } from "../../state/CartProvider";

import { BasketItemsList } from "./BasketItemsList";
import { CheckoutSection } from "./CheckoutSection";
import { Loading } from "./Loading";

const EmptyCartMessage = styled.p`
  padding-top: 15%;
  text-align: center;
`;

export const BasketPage = () => {
  const cartData = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  // const { strapiBasketPage } = useStaticQuery(
  //   graphql`
  //     query {
  //       strapiBasketPage {
  //         empty_basket_message
  //       }
  //     }
  //   `
  // );

  if (loading) return <Loading />;

  return (
    <>
      {cartData.hasItems ? (
        <>
          <BasketItemsList />
          <CheckoutSection setLoading={() => setLoading(true)} />
        </>
      ) : (
        <EmptyCartMessage id="empty-basket-message">
          {/* {strapiBasketPage.empty_basket_message} */}
        </EmptyCartMessage>
      )}
    </>
  );
};
