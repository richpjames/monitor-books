import React, { createContext, ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { productMapper } from "../api/mappers";

export const ProductsContext = createContext<Partial<{ skus: Skus }>>({});
type skusQuery = { allStrapiBooks: { nodes: ApiProduct[] } };

/**
 * Wrapper to give Provider access to Sku nodes from Gatsby's GraphQL store.
 */
const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const data: skusQuery = useStaticQuery(skusQuery);
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
  data: { allStrapiBooks: { nodes: ApiProduct[] } };
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
const processGatsbyData = (data: skusQuery) => {
  const skus: { [index: string]: Product } = {};
  // Sku nodes are grouped by product
  data.allStrapiBooks.nodes.forEach((book) => {
    const mappedBook = productMapper(book);
    const sku = mappedBook.priceId;
    skus[sku] = mappedBook;
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
        gallery_images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inventory
        thumbnail_image {
          localFile {
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        devPriceId
        prodPriceId
        price
      }
    }
  }
`;

export default ProductsProvider;
