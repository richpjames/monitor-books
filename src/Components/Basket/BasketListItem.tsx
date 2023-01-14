import React, { useContext } from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

import { QuantityPanel } from "./QuantityPanel";
import { mobileBreakpoint } from "../../constants";
import { CartContext } from "../../state/CartProvider";

const BasketMetaInfoContainer = styled.div`
  display: grid;
  grid-template-areas:
    "title subtitle quantity"
    "price . .";
  grid-template-rows: fit-content(50%) fit-content(50%);
  grid-template-columns: 45% 22.5% 22.5%;
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
      "title"
      "subtitle"
      "price"
      "quantity";
    grid-template-columns: 100%;
    grid-template-rows: fit-content(50%) fit-content(50%) fit-content(50%) fit-content(
        50%
      );
    > p {
      text-align: center;
      padding-bottom: 0;
    }
    h4 {
      width: 100%;
    }
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
    <li id={`${slug}-basket-item`}>
      {thumbnail && <Image image={image} alt={`thumbnail image of ${title}`} />}
      <BasketMetaInfoContainer>
        <h4 id={`${basketItemLabel}-subtitle`}>{subtitle},</h4>
        <h4 id={`${basketItemLabel}-title`}> {title}</h4>
        <QuantityPanel
          addToCart={() => handleAdd(id)}
          decrementInCart={() => handleSubtract(id)}
          outOfStock={stock < 0}
          quantity={quantity}
          label={basketItemLabel}
        />
        <p id={`${basketItemLabel}-price`}>£{price}</p>
      </BasketMetaInfoContainer>
    </li>
  );
};

export default BasketListItem;
