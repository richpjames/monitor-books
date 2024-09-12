import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";

import Layout from "../Components/layout";

import { BasketPage } from "../Components/Basket/BasketPage";
import SEO from "../Components/seo";

const Basket: React.FC<PageProps> = () => {
  const { allSanityBackgroundColours } = useStaticQuery(graphql`
    query {
      allSanityBackgroundColours {
        nodes {
          basket
        }
      }
    }
  `);

  const { basket: basketBackgroundColour } =
    allSanityBackgroundColours.nodes[0];

  return (
    <Layout backgroundColour={basketBackgroundColour}>
      <SEO title="Basket" description="basket" />
      <BasketPage />
    </Layout>
  );
};
export default Basket;
