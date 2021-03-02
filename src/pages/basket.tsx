import React, { useState } from "react";
import styled from "styled-components/macro";

import CartProvider from "../state/CartProvider";
import ProductsProvider from "../state/ProductsProvider";

import { LoadingSpinner } from "../Components/Common/LoadingSpinner";

import { ErrorText } from "../Components/Common";
import Layout from "../Components/layout";
import { ListTitle } from "../Components/Common/ListComponents";

import { CheckoutSection } from "../Components/Pages/Basket/CheckoutSection";
import { BasketItemsList } from "../Components/Pages/Basket/BasketItemsList";

const Basket = () => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  let basketComponent;
  if (!loading && !hasError) {
    basketComponent = (
      <>
        <BasketItemsList />
        <CheckoutSection />
      </>
    );
  } else if (loading && !hasError) {
    basketComponent = <LoadingSpinner />;
  } else if (hasError) {
    basketComponent = (
      <ErrorText
        line1="Something has gone wrong :("
        line2="Please try again or contact contact@monitorbooks.co.uk"
      />
    );
  }

  return (
    <Layout>
      <ListTitle id="basket-title">Basket</ListTitle>
      {basketComponent}
    </Layout>
  );
};
export default Basket;
