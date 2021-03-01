import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { productMapper } from "../api/mappers";

export const ProductsContext = React.createContext();

/**
 * Wrapper to give Provider access to Sku nodes from Gatsby's GraphQL store.
 */
const ProductsProvider = ({ children }) => {
  const data = useStaticQuery(skusQuery);
  return <Provider data={data}>{children}</Provider>;
};

/**
 * Shares product & sku data through Context.
 * Products are first loaded from Gatsby's GraphQL store and then updated with
 * current information from Stripe.
 */
const Provider = ({ data, children }) => {
  // Load product data from Gatsby store

  const skus = processGatsbyData(data);

  return (
    <ProductsContext.Provider
      value={{
        skus,
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

/** Normalize structure of data sourced from Gatsby's GraphQL store */
const processGatsbyData = (data) => {
  const skus = {};
  // Sku nodes are grouped by product
  data.allStrapiBooks.nodes.forEach((book) => {
    const { prodPriceId, devPriceId } = book;
    const sku =
      process.env.NODE_ENV === "development" ? devPriceId : prodPriceId;
    skus[sku] = productMapper(book);
  });
  return skus;
};
const skusQuery = graphql`
  {
    allStrapiBooks {
      nodes {
        title
        author
        blurb1
        blurb2
        publishedDate
        slug
        id
        inventory
        thumbnail
        devPriceId
        prodPriceId
        price
      }
    }
  }
`;

export default ProductsProvider;
