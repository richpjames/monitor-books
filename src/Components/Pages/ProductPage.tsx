import React from "react";
import { RouteComponentProps } from "@reach/router";

import Photos from "../Common/Photos";
import Title from "../Common/Title";
import Text from "../Common/Text";
import { PageWrapper, InfoSection } from "../Common/Common";
import { CTAButton } from "../Common/CTAButton";

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
}: IProps) => {
  let buttonMessage = "Add to basket";

  if (cartQuantityById[id] > 0) {
    buttonMessage = "In basket";
  } else if (inventoryQuantity < 1) {
    buttonMessage = "Out of stock";
  }

  return (
    <PageWrapper>
      <Photos photos={photos} />
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
    </PageWrapper>
  );
};

export default ProductPage;
