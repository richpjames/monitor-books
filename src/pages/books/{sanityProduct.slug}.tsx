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
const LeftSection = styled(PortableText)<{ className: string }>`
  width: 45%;
  padding-bottom: 0;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: var(--spacing-3);
    border-bottom: var(--line-thickness) solid var(--main-border-colour);
    width: 100%;
  }
`;

const RightSection = styled(PortableText)<{ className: string }>`
  width: 100%;
  padding-bottom: 0;
  p {
    padding-bottom: 0;
  }
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-left: 0;
    padding-bottom: var(--spacing-2);
    padding-top: var(--spacing-2);
  }
`;

const RightSectionWrapper = styled.div`
  padding-left: 9%;
  display: flex;
  flex-direction: column;
  width: 45%;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    width: 100%;
    padding-left: 0;
  }
`;

const TextWrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 2.5%;
  b {
    font-style: italic;
  }
  @media only screen and (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    margin-bottom: var(--spacing-6);
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
  console.log({ blurb1 });
  return (
    <Layout>
      <SEO title={`${title} by ${author}`} description={blurb1} />
      <Container>
        <Photos photos={galleryImages} title={title} />
        <h1>{title}</h1>
        <h2>{author}</h2>
        <TextWrapper className="TextWrapper">
          <LeftSection value={blurb1} className="left-section" />
          <RightSectionWrapper>
            <RightSection
              className="right-section"
              value={blurb2}
            ></RightSection>
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
