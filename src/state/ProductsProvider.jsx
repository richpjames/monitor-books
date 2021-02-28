import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { productMapper } from "../api/mappers";

export const ProductsContext = React.createContext();

/**
 * Wrapper to give Provider access to Sku nodes from Gatsby's GraphQL store.
 */
const ProductsProvider = ({ children }) => {
  const { allStrapiBooks } = useStaticQuery(skusQuery);
  return <Provider data={allStrapiBooks}>{children}</Provider>;
};

/**
 * Shares product & sku data through Context.
 * Products are first loaded from Gatsby's GraphQL store and then updated with
 * current information from Stripe.
 */
const Provider = ({ data, children }) => {
  // Load product data from Gatsby store
  const products = data.nodes.map(productMapper);

  return (
    <ProductsContext.Provider
      value={{
        products,
        listProducts: (sortFn) => {
          const fn = sortFn || ((a, b) => a.publishedDate - b.publishedDate);
          return Object.values(products).sort(fn);
        },
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const skusQuery = graphql`
  {
    allStrapiBooks {
      nodes {
        author
        devPriceId
        prodPriceId
        price
        thumbnail
        slug
        Title
      }
    }
  }
`;

export default ProductsProvider;
