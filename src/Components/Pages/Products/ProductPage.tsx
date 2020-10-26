import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import {
  AddToBasketButton,
  Photos,
  ProductTitle,
  SplitText,
  PageWrapper,
  InfoSection,
} from "../../Common";
import {
  text,
  productPageImageHeight,
  productPageImageWidth,
} from "../../../constants";

const ProductPageWrapper = styled(PageWrapper)`
  padding-top: 2rem;
  display: grid;
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
  path,
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
        <ProductTitle title={author} subtitle={title} />
        <SplitText
          leftText={leftDescription}
          rightText={rightDescription}
          addToBasketButton={
            <AddToBasketButton id={id} borderColour={text} linkTo={path} />
          }
        />
      </InfoSection>
    </ProductPageWrapper>
  );
};

export default ProductPage;
