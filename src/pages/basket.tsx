import React, { useLayoutEffect } from "react";
import { PageProps } from "gatsby";

import Layout from "../Components/layout";

import { CheckoutSection } from "../Components/Basket/CheckoutSection";
import { BasketItemsList } from "../Components/Basket/BasketItemsList";
import SEO from "../Components/seo";
import { setBackground } from "../hooks/setBackground";

const Basket: React.FC<PageProps> = ({ location }) => {
  let basketComponent = (
    <>
      <BasketItemsList />
      <CheckoutSection />
    </>
  );


  useLayoutEffect(() => {
    setBackground('var(--basket-background-colour)')
  }, [])

  return (
    <Layout
      pathname={location.pathname}
    >
      <SEO title="Basket" description="boook basket" />
      {basketComponent}
    </Layout>
  );
};
export default Basket;
