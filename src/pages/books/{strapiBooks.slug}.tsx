import { graphql, PageProps } from "gatsby";
import React from "react";
import styled from "styled-components/macro";
import { GatsbyImage } from "gatsby-plugin-image";

import { productMapper } from "../../api/mappers";
import Layout from "../../Components/layout";
import { AddToBasketButton, Photos, SplitText } from "../../Components/Common";
import SEO from "../../Components/seo";
import { mobileBreakpoint } from "../../constants";
import useMediaQuery from "../../hooks/useMediaQuery";

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
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint})`);
  const photoReel = galleryImages.map((photo, i) => {
    return (
      <GatsbyImage
        image={photo?.localFile?.childImageSharp?.gatsbyImageData}
        alt={`a photo of ${title} book`}
        key={i}
      />
    );
  });
  console.log(isMobile)
  return (
    <Layout
      backgroundColour="var(--product-background-colour)"
      pathname={location.pathname}
    >
      <SEO title={`${title} by ${author}`} description={blurb1} />
      <Container>
        {!isMobile ? (
          <Photos photos={galleryImages} title={title} />
        ) : (
          photoReel[0]
        )}
        <h1>{`${title[0]}${title.slice(1).toLowerCase()}`}</h1>
        <h2>{author}</h2>
        <SplitText
          leftText={blurb1}
          rightText={blurb2}
          addToBasketButton={
            <AddToBasketButton id={priceId} publishedDate={publishedDate} />
          }
          photo={photoReel[1]}
        />
      </Container>
    </Layout>
  );
};
export default ProductPage;
