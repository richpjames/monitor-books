import { graphql, PageProps } from "gatsby";
import React from "react";
import styled from "styled-components/macro";

import { productMapper } from "../../api/mappers";
import Layout from "../../Components/layout";
import { AddToBasketButton, Photos, SplitText } from "../../Components/Common";
import SEO from "../../Components/seo";

export const query = graphql`
  query BookQuery($slug: String!) {
    strapiBooks(slug: { eq: $slug }) {
      title
      author
      images {
        fullSize
      }
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
`;

const Container = styled.div`
  border-top: var(--line-thickness) solid var(--main-text-colour);
  padding-top: var(--small-component-spacing);
  padding-bottom: var(--small-component-spacing);
  border-bottom: var(--line-thickness) solid var(--main-text-colour);
`;

interface ProductPageProps extends PageProps {
  data: { strapiBooks: ApiProduct };
}

const ProductPage: React.FC<ProductPageProps> = ({ data, location }) => {
  const product: Product = productMapper(data.strapiBooks);
  const {
    photos,
    title,
    author,
    blurb1,
    blurb2,
    priceId,
    publishedDate,
  } = product;
  return (
    <Layout
      backgroundColour="var(--product-background-colour)"
      pathname={location.pathname}
    >
      <SEO title={`${title} by ${author}`} description={blurb1} />
      <Container>
        <Photos photos={photos} />
        <h1>{`${title[0]}${title.slice(1).toLowerCase()}`}</h1>
        <h2>{author}</h2>
        <SplitText
          leftText={blurb1}
          rightText={blurb2}
          addToBasketButton={
            <AddToBasketButton id={priceId} publishedDate={publishedDate} />
          }
        />
      </Container>
    </Layout>
  );
};
export default ProductPage;
