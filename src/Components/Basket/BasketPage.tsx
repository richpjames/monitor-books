import React, { useContext, useState } from "react";
import styled from "@emotion/styled";

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
          You have an empty basket.
        </EmptyCartMessage>
      )}
    </>
  );
};
