import React, { createContext, ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { basketProductMapper } from "../api/mappers";

export const ProductsContext = createContext<Partial<{ skus: Skus }>>({});
type SkusQuery = { allSanityProduct: { nodes: ApiFullProduct[] } };

/**
 * Wrapper to give Provider access to Sku nodes from Gatsby's GraphQL store.
 */
const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const data: SkusQuery = useStaticQuery(skusQuery);
  return <Provider data={data}>{children}</Provider>;
};

/**
 * Shares product & sku data through Context.
 * Products are first loaded from Gatsby's GraphQL store and then updated with
 * current information from Stripe.
 */
const Provider = ({
  data,
  children,
}: {
  children: ReactNode;
  data: SkusQuery;
}) => {
  // Load product data from Gatsby store
  const skus = processGatsbyData(data);

  return (
    <ProductsContext.Provider
      value={{
        skus,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

/** Normalize structure of data sourced from Gatsby's GraphQL store */
const processGatsbyData = (data: SkusQuery) => {
  const skus: { [index: string]: BasketProduct } = {};
  // Sku nodes are grouped by product
  data.allSanityProduct.nodes.forEach((book) => {
    const mappedBook = basketProductMapper(book);
    const sku = mappedBook.priceId;
    skus[sku] = mappedBook;
  });
  return skus;
};

const skusQuery = graphql`
  {
    allSanityProduct {
      nodes {
        title
        author
        date_published
        slug
        id
        photos {
          _key
          _type
          _rawAsset
          _rawHotspot
          _rawCrop
        }
        inventory
        thumbnail_image {
          asset {
            gatsbyImageData(placeholder: BLURRED, fit: FILLMAX)
          }
        }
        price_id
        price
      }
    }
  }
`;

export default ProductsProvider;
