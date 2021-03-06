import React from "react";
import { PageProps } from "gatsby";

import Layout from "../Components/layout";
import { ListTitle } from "../Components/Common/ListComponents";

import { CheckoutSection } from "../Components/Pages/Basket/CheckoutSection";
import { BasketItemsList } from "../Components/Pages/Basket/BasketItemsList";

const Basket: React.FC<PageProps> = ({ location }) => {
  let basketComponent = (
    <>
      <BasketItemsList />
      <CheckoutSection />
    </>
  );

  return (
    <Layout backgroundColour="pink" pathname={location.pathname}>
      <ListTitle id="basket-title">Basket</ListTitle>
      {basketComponent}
    </Layout>
  );
};
export default Basket;
