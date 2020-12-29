import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { navigate } from "@reach/router";

import {
  addToBasket,
  decrementInCart,
  removeFromBasket,
} from "../../../actions";
import { QuantityPanel } from "./QuantityPanel";
import {
  ListItemContainer,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  ListItemPhotoWrap,
  ListItemPhoto,
} from "../../Common/";

const RemoveFromCartButton = styled.button`
  right: 0;
  top: 0;
  position: absolute;
  font-size: 0.75em;
`;

const PriceWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

interface Props {
  addToBasket: (id: string) => void;
  decrementInCart: (id: string) => void;
  id: string;
  imageSrc: string;
  index: number;
  price: string;
  quantity: number;
  removeFromBasket: (id: string, quantityToReplace: number) => void;
  stock: number;
  subtitle: string;
  title: string;
  slug: string;
}

const BasketListItem = ({
  addToBasket,
  decrementInCart,
  id,
  imageSrc,
  index,
  quantity,
  removeFromBasket,
  price,
  stock,
  subtitle,
  title,
  slug,
}: Props) => {
  const basketItemLabel = slug.toLowerCase();
  return (
    <ListItemContainer
      index={index}
      height="20%"
      width="100%"
      horizontalMargin="5rem"
      topMargin="2rem"
    >
      <ListItemPhotoWrap width="40%" onClick={() => navigate(slug)}>
        <ListItemPhoto src={imageSrc} />
      </ListItemPhotoWrap>
      <MetaInfoContainer index={index} width="40%">
        <ListItemTitle id={`${basketItemLabel}-title`}>{title}</ListItemTitle>
        <ListItemSubtitle id={`${basketItemLabel}-subtitle`}>
          {subtitle}
        </ListItemSubtitle>
        <PriceWrapper>
          <p>£{price}</p>
        </PriceWrapper>
        <QuantityPanel
          addToCart={() => addToBasket(id)}
          decrementInCart={() => decrementInCart(id)}
          outOfStock={stock < 0}
          quantity={quantity}
          label={basketItemLabel}
        />
        <RemoveFromCartButton
          onClick={() => removeFromBasket(id, quantity)}
          name="Remove from basket"
          type="button"
          id={`${basketItemLabel}-remove-button`}
        >
          X
        </RemoveFromCartButton>
      </MetaInfoContainer>
    </ListItemContainer>
  );
};

export default connect(null, {
  addToBasket,
  removeFromBasket,
  decrementInCart,
})(BasketListItem);
