import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components/macro";
import { GatsbyImage } from "gatsby-plugin-image";

import { productMapper } from "../../api/mappers";
import Layout from "../../Components/layout";
import { AddToBasketButton, Photos, SplitText } from "../../Components/Common";
import SEO from "../../Components/seo";
import { mobileBreakpoint } from "../../constants";
import { useSetBackground } from "../../hooks/useSetBackground";

export const query = graphql`
  query BookQuery($slug: String!) {
    strapiBooks(slug: { eq: $slug }) {
      title
      author
      images {
        fullSize
      }
      gallery_images {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
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
  padding-top: var(--small-component-spacing);
  padding-bottom: var(--small-component-spacing);
  border-top: var(--line-thickness) solid var(--main-text-colour);
  border-bottom: var(--line-thickness) solid var(--main-text-colour);
  @media only screen and (max-width: ${mobileBreakpoint}) {
    border-bottom: none;
    border-top: none;
    padding-bottom: 0;
  }
`;

interface ProductPageProps extends PageProps {
  data: { strapiBooks: ApiProduct };
}

const ProductPage: React.FC<ProductPageProps> = ({ data, location }) => {
  useSetBackground('product-background-colour')
  const product: Product = productMapper(data.strapiBooks);
  const {
    title,
    author,
    blurb1,
    blurb2,
    priceId,
    publishedDate,
    galleryImages,
  } = product;




  return (
    <Layout
      pathname={location.pathname}
    >
      <SEO title={`${title} by ${author}`} description={blurb1} />
      <Container>
        <Photos photos={galleryImages} title={title} />
        <h1>{title.split(" ")
          .map((word) => `${word[0]}${word.slice(1).toLowerCase()}`)
          .join(" ")}</h1>
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
