import React from "react";

import Layout from "../Components/layout";
import { ListTitle } from "../Components/Common/ListComponents";

import { CheckoutSection } from "../Components/Pages/Basket/CheckoutSection";
import { BasketItemsList } from "../Components/Pages/Basket/BasketItemsList";

const Basket = () => {
  let basketComponent = (
    <>
      <BasketItemsList />
      <CheckoutSection />
    </>
  );

  return (
    <Layout>
      <ListTitle id="basket-title">Basket</ListTitle>
      {basketComponent}
    </Layout>
  );
};
export default Basket;
