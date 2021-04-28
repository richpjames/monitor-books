import React from "react";
import { PageProps } from "gatsby";

import Layout from "../Components/layout";

import { CheckoutSection } from "../Components/Pages/Basket/CheckoutSection";
import { BasketItemsList } from "../Components/Pages/Basket/BasketItemsList";
import SEO from "../Components/seo";

const Basket: React.FC<PageProps> = ({ location }) => {
  let basketComponent = (
    <>
      <BasketItemsList />
      {/* <CheckoutSection /> */}
    </>
  );

  return (
    <Layout
      backgroundColour="var(--basket-background-colour)"
      pathname={location.pathname}
    >
      <SEO title="Basket" description="boook basket" />
      {basketComponent}
    </Layout>
  );
};
export default Basket;
