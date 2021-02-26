import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { navigate } from "@reach/router";

import {
  addToBasket,
  decrementInCart,
  removeFromBasket,
} from "../../../state/actions";
import { QuantityPanel } from "./QuantityPanel";
import {
  BasketListItemContainerWrap,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  ListItemPhotoWrap,
  ListItemPhoto,
} from "../../Common";

const RemoveFromCartButton = styled.button`
  right: 0;
  top: 0;
  position: absolute;
  font-size: 0.75em;
`;

const PriceWrapper = styled.p`
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
`;

interface Props {
  addToBasket: (id: string) => void;
  decrementInCart: (id: string) => void;
  id: string;
  thumbnail: string;
  index: number;
  price: number;
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
  thumbnail,
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
    <BasketListItemContainerWrap
      index={index}
      height="20%"
      width="100%"
      horizontalmargin="5rem"
      topmargin="2rem"
      id={`${slug}-basket-item`}
    >
      <ListItemPhotoWrap width="40%" onClick={() => navigate(`books/${slug}`)}>
        <ListItemPhoto src={thumbnail} alt={`thumbnail image of ${title}`} />
      </ListItemPhotoWrap>
      <MetaInfoContainer index={index} width="40%">
        <ListItemTitle id={`${basketItemLabel}-title`}>{title}</ListItemTitle>
        <ListItemSubtitle id={`${basketItemLabel}-subtitle`}>
          {subtitle}
        </ListItemSubtitle>
        <PriceWrapper id={`${basketItemLabel}-price`}>£{price}</PriceWrapper>
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
    </BasketListItemContainerWrap>
  );
};

export default connect(null, {
  addToBasket,
  removeFromBasket,
  decrementInCart,
})(BasketListItem);
