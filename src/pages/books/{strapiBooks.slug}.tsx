import { graphql, PageProps } from "gatsby";
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
    <ProductPageWrapper
      backgroundColour="var(--purple)"
      pathname={location.pathname}
    >
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
            <AddToBasketButton
              id={priceId}
              borderColour={text}
              publishedDate={publishedDate}
            />
          }
        />
      </InfoSection>
    </ProductPageWrapper>
  );
};
export default ProductPage;
