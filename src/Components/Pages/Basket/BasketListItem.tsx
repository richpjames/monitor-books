import React, { useContext } from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components/macro";

import { QuantityPanel } from "./QuantityPanel";

import { CartContext } from "../../../state/CartProvider";

export const BasketListItemContainerWrap = styled.div`
  display: flex;

  text-decoration: none;
  width: 100%;
`;

const BasketMetaInfoContainer = styled.div`
  border-top: 2px solid var(--main-border-colour);
  border-bottom: 2px solid var(--main-border-colour);
  display: grid;
  grid-template-areas:
    "title title quantity"
    "price . .";
  grid-template-rows: var(--x-small-component-width) var(
      --x-small-component-width
    );
  row-gap: var(--small-text-spacing);
  width: 100%;
`;
const PriceWrapper = styled.p`
  grid-area: price;
  width: 100%;
`;
const TitleWrapper = styled.h4`
  width: 85%;
  grid-area: title;
`;
const Image = styled(GatsbyImage)`
  margin-right: var(--x-small-component-spacing);
  width: var(--medium-component-width);
`;
interface Props {
  id: string;
  thumbnail: any;
  index: number;
  price: number;
  quantity: number;
  stock: number;
  subtitle: string;
  title: string;
  slug: string;
}

const BasketListItem = ({
  id,
  thumbnail,
  index,
  quantity,
  price,
  stock,
  subtitle,
  title,
  slug,
}: Props) => {
  const { add, subtract } = useContext(CartContext);
  const handleAdd = (id: string) => (add ? add(id) : null);
  const handleSubtract = (id: string) => (subtract ? subtract(id) : null);

  const image = getImage(thumbnail);
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
      <Image image={image} alt={`thumbnail image of ${title}`} />
      <BasketMetaInfoContainer>
        <TitleWrapper id={`${basketItemLabel}-subtitle`}>
          <i>
            {subtitle
              .split(" ")
              .map((word) => `${word[0]}${word.slice(1).toLowerCase()}`)
              .join(" ")}
          </i>
          , {title}
        </TitleWrapper>
        <QuantityPanel
          addToCart={() => handleAdd(id)}
          decrementInCart={() => handleSubtract(id)}
          outOfStock={stock < 0}
          quantity={quantity}
          label={basketItemLabel}
        />
        <PriceWrapper id={`${basketItemLabel}-price`}>£{price}</PriceWrapper>
      </BasketMetaInfoContainer>
    </BasketListItemContainerWrap>
  );
};

export default BasketListItem;
