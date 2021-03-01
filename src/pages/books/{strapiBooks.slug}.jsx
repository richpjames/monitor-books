import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components/macro";

import { productMapper } from "../../api/mappers";
import Layout from "../../Components/layout";
import {
  AddToBasketButton,
  Photos,
  ProductTitle,
  SplitText,
  InfoSection,
} from "../../Components/Common";
import {
  text,
  productPageImageHeight,
  productPageImageWidth,
} from "../../constants";
import CartProvider from "../../state/CartProvider";
import ProductsProvider from "../../state/ProductsProvider";

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

const ProductPageWrapper = styled(Layout)`
  padding-top: 2rem;
  display: grid;
`;

const ProductPage = ({ data }) => {
  const product = productMapper(data.strapiBooks);
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
    <ProductPageWrapper>
      <Photos
        photos={photos}
        imageThumbnailHeight={productPageImageHeight}
        imageThumbnailWidth={productPageImageWidth}
      />
      <InfoSection>
        <ProductTitle title={author} subtitle={title} />
        <SplitText
          leftText={blurb1}
          rightText={blurb2}
          addToBasketButton={
            <ProductsProvider>
              <CartProvider>
                <AddToBasketButton
                  id={priceId}
                  borderColour={text}
                  publishedDate={publishedDate}
                />
              </CartProvider>
            </ProductsProvider>
          }
        />
      </InfoSection>
    </ProductPageWrapper>
  );
};
export default ProductPage;
