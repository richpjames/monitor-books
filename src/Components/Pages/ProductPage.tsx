import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import Photos from "../Common/Photos";
import Title from "../Common/Title";
import Text from "../Common/Text";
import { PageWrapper, InfoSection } from "../Common/Common";
import { CTAButton } from "../Common/CTAButton";
import {
  productPageImageHeight,
  productPageImageWidth,
} from "../../constants/index";

const ProductPageWrapper = styled(PageWrapper)`
  padding-top: 2rem;
`;

interface IProps extends RouteComponentProps {
  cartQuantityById: { [key: string]: number };
  inventoryQuantity: number;
  addToCart: (productId: string) => void;
  addToCartRedirect: () => void;
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
  addToCartRedirect,
  inventoryQuantity,
  cartQuantityById,
  addToCart,
  imagePath,
}: IProps) => {
  let buttonMessage = "Add to basket";

  if (cartQuantityById[id] > 0) {
    buttonMessage = "In basket";
  } else if (inventoryQuantity < 1) {
    buttonMessage = "Out of stock";
  }

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
      <CTAButton
        onClick={
          cartQuantityById[id] > 0 ? addToCartRedirect : () => addToCart(id)
        }
        disabled={inventoryQuantity < 1}
      >
        {buttonMessage}
      </CTAButton>
    </ProductPageWrapper>
  );
};

export default ProductPage;
