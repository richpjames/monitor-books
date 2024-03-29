import React from "react";
import { PageProps } from "gatsby";

import Layout from "../Components/layout";

import { BasketPage } from "../Components/Basket/BasketPage";
import SEO from "../Components/seo";
import { useSetBackground } from "../hooks/useSetBackground";

const Basket: React.FC<PageProps> = () => {
  useSetBackground("basket");

  return (
    <Layout>
      <SEO title="Basket" description="basket" />
      <BasketPage />
    </Layout>
  );
};
export default Basket;
