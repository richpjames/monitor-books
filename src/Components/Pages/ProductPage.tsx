import React from "react";
import { RouteComponentProps } from "@reach/router";

import Photos from "../Common/Photos";
import Title from "../Common/Title";
import Text from "../Common/Text";
import { PageWrapper, InfoSection } from "../Common/Common";
import { Button } from "../Common/CTAButton";

interface IProps extends RouteComponentProps {
  cartQuantityById: { [key: string]: number };
  inventoryQuantity: number;
  addToCart: (productId: string) => void;
  redirectOnAddToCart: boolean;
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
  redirectOnAddToCart,
  addToCart,
}: IProps) => {
  let buttonMessage;
  let buttonDisabled;

  if (cartQuantityById[id] > 0) {
    buttonMessage = "In basket";
    buttonDisabled = true;
  } else if (inventoryQuantity > 0) {
    buttonMessage = "Add to basket";
    buttonDisabled = false;
  } else {
    buttonMessage = "Out of stock";
    buttonDisabled = true;
  }

  return (
    <PageWrapper>
      <Photos photos={photos} />
      <InfoSection>
        <Title title={author} subtitle={title} />
        <Text leftText={leftDescription} rightText={rightDescription} />
      </InfoSection>
      <Button
        onClick={() => addToCart(id)}
        disabled={buttonDisabled}
        disabledRedirect={redirectOnAddToCart}
        onDisabledRedirect={addToCartRedirect}
      >
        {buttonMessage}
      </Button>
    </PageWrapper>
  );
};

export default ProductPage;
