import React, { useContext } from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components/macro";

import { QuantityPanel } from "./QuantityPanel";
import { mobileBreakpoint } from "../../constants";
import { CartContext } from "../../state/CartProvider";

export const BasketListItemContainerWrap = styled.div<{ index: number }>`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  width: 100%;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }
`;

const BasketMetaInfoContainer = styled.div`
  border-top: var(--line-thickness) solid var(--main-border-colour);
  border-bottom: var(--line-thickness) solid var(--main-border-colour);
  display: grid;
  grid-template-areas:
    "title subtitle quantity"
    "price . .";
  grid-template-rows: var(--spacing-10) var(--spacing-10);
  grid-template-columns: fit-content(50%) fit-content(40%) auto;
  row-gap: var(--spacing-2);
  width: 100%;
  > p {
    grid-area: price;
    width: 100%;
  }
  > h4 {
    grid-area: title;
    width: 85%;
    height: 100%;
    margin: 0;
    padding-bottom: 0;
  }
  h4:first-of-type {
    grid-area: title;
  }

  h4:last-of-type {
    grid-area: subtitle;
  }
  @media only screen and (max-width: ${mobileBreakpoint}) {
    grid-template-areas:
      "title "
      "subtitle"
      "quantity"
      "price ";
    grid-template-columns: 100%;
  
  }
  > p {
    width: 100%;
  }

  h4 {
    width: 100%;
  }
`;

const Image = styled(GatsbyImage)`
  margin-right: var(--spacing-10);
  margin-left: 0;
  margin-bottom: 0;
  width: var(--spacing-9);
  @media only screen and (max-width: ${mobileBreakpoint}) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: var(--spacing-10);
  }
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
    <BasketListItemContainerWrap index={index} id={`${slug}-basket-item`}>
      <Image image={image} alt={`thumbnail image of ${title}`} />
      <BasketMetaInfoContainer>
        <h4 id={`${basketItemLabel}-subtitle`}>
          {subtitle
            .split(" ")
            .map((word) => `${word[0]}${word.slice(1).toLowerCase()}`)
            .join(" ")}
          ,
        </h4>
        <h4> {title}</h4>
        <QuantityPanel
          addToCart={() => handleAdd(id)}
          decrementInCart={() => handleSubtract(id)}
          outOfStock={stock < 0}
          quantity={quantity}
          label={basketItemLabel}
        />
        <p id={`${basketItemLabel}-price`}>£{price}</p>
      </BasketMetaInfoContainer>
    </BasketListItemContainerWrap>
  );
};

export default BasketListItem;
