import React from "react";
import { RouteComponentProps } from "@reach/router";

import Photos from "../Common/Photos";
import Title from "../Common/Title";
import Text from "../Common/Text";
import { PageWrapper, InfoSection } from "../Common/Common";
import BuyButton from "../Common/BuyButton";

interface IProps extends RouteComponentProps {
  cartQuantityById: { [key: string]: number };
  inventoryQuantity: number;
  addToCart: (productId: string) => void;
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
  inventoryQuantity,
  cartQuantityById,
  addToCart,
}: IProps) => {
  let buttonMessage;
  let buttonDisabled;
  if (
    inventoryQuantity &&
    inventoryQuantity > 0 &&
    cartQuantityById &&
    !cartQuantityById[id]
  ) {
    buttonMessage = "Add to basket";
    buttonDisabled = false;
  } else if (cartQuantityById && cartQuantityById[id] > 0) {
    buttonMessage = "In basket";
    buttonDisabled = true;
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
      {addToCart && (
        <BuyButton onClick={() => addToCart(id)} disabled={buttonDisabled}>
          {buttonMessage}
        </BuyButton>
      )}
    </PageWrapper>
  );
};

export default ProductPage;
