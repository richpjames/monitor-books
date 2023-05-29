import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "@emotion/styled";
import { PortableText } from "@portabletext/react";

import { singleProductPageMapper } from "../../api/mappers";

import Layout from "../../Components/layout";
import { AddToBasketButton, Photos } from "../../Components/Common";
import SEO from "../../Components/seo";
import { mobileBreakpoint } from "../../constants";
import { useSetBackground } from "../../hooks/useSetBackground";
import {
  LeftSection,
  RightSection,
  RightSectionWrapper,
  TextWrapper,
} from "../../Components/Common/Text";

const Container = styled.div`
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-6);
  border-top: var(--line-thickness) solid var(--main-text-colour);
  border-bottom: var(--line-thickness) solid var(--main-text-colour);
  > h1 {
    padding-bottom: 0;
  }
  @media only screen and (max-width: ${mobileBreakpoint}) {
    border-bottom: none;
    border-top: none;
    padding-bottom: 0;
    padding-top: var(--spacing-1);
  }
`;

export const query = graphql`
  query BookQuery($slug: String!) {
    sanityProduct(slug: { eq: $slug }) {
      author
      _rawBlurb1
      _rawBlurb2
      date_published
      inventory
      page_order
      photos {
        _key
        _type
        _rawAsset
        _rawHotspot
        _rawCrop
        asset {
          gatsbyImageData(placeholder: BLURRED, fit: FILLMAX)
        }
      }
      price
      product_type
      price_id
      slug
      title
      thumbnail_image {
        asset {
          gatsbyImageData(placeholder: BLURRED, fit: FILLMAX)
        }
      }
    }
  }
`;
interface ProductPageProps extends PageProps {
  data: { sanityProduct: ApiSinglePageProduct };
}

const ProductPage: React.FC<ProductPageProps> = ({ data }) => {
  useSetBackground("products");
  const product: SinglePageProduct = singleProductPageMapper(
    data.sanityProduct
  );
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
    <Layout>
      <SEO
        title={`${title} by ${author}`}
        description={`${title} by ${author}`}
      />
      <Container>
        <Photos photos={galleryImages} title={title} />
        <h1>{title}</h1>
        <h2>{author}</h2>
        <TextWrapper className="TextWrapper">
          <LeftSection className="left-section">
            <PortableText value={blurb1} />
          </LeftSection>
          <RightSectionWrapper>
            <RightSection className="right-section">
              <PortableText value={blurb2} />
            </RightSection>
            {priceId && (
              <AddToBasketButton
                id={priceId}
                preorder={
                  new Date(publishedDate).getTime() > new Date().getTime()
                }
              />
            )}
          </RightSectionWrapper>
        </TextWrapper>
      </Container>
    </Layout>
  );
};
export default ProductPage;
