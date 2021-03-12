import React from "react";
import { PageProps } from "gatsby";

import Layout from "../Components/layout";

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
    <Layout backgroundColour="var(--green)" pathname={location.pathname}>
      {basketComponent}
    </Layout>
  );
};
export default Basket;
