import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import {
  AddToBasketButton,
  Photos,
  Title,
  Text,
  PageWrapper,
  InfoSection,
} from "../Common";
import {
  productPageImageHeight,
  productPageImageWidth,
} from "../../constants/index";

const ProductPageWrapper = styled(PageWrapper)`
  padding-top: 2rem;
`;

interface Props extends RouteComponentProps {
  photos: number[];
  title: string;
  author: string;
  leftDescription: string;
  rightDescription: string;
  id: string;
  imagePath: string;
}

const ProductPage = ({
  photos,
  title,
  author,
  leftDescription,
  rightDescription,
  id,
  imagePath,
}: Props) => {
  return (
    <ProductPageWrapper>
      <Photos
        photos={photos}
        url={imagePath}
        imageThumbnailHeight={productPageImageHeight}
        imageThumbnailWidth={productPageImageWidth}
      />
      <InfoSection>
        <Title title={author} subtitle={title} />
        <Text leftText={leftDescription} rightText={rightDescription} />
      </InfoSection>
      <AddToBasketButton id={id} />
    </ProductPageWrapper>
  );
};

export default ProductPage;
