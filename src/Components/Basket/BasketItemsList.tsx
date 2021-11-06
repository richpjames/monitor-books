import React, { useContext } from "react";
import styled from "styled-components/macro";

import { CartContext } from "../../state/CartProvider";
import { ProductsContext } from "../../state/ProductsProvider";
import { mobileBreakpoint } from "../../constants";

import BasketListItem from "./BasketListItem";

const BasketItemsSection = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  & li {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  width: 100%;
  border-bottom: var(--line-thickness) solid var(--main-border-colour);
  padding-top: var(--spacing-3);
  padding-bottom: var(--spacing-3);
  @media only screen and (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }  
}
  :first-child {
    border-top: var(--line-thickness) solid var(--main-border-colour);
}
`;

export const BasketItemsList = () => {
  const cartData = useContext(CartContext);
  const productsData = useContext(ProductsContext);
  const cartContents = cartData.contents || [];
  const skus = productsData.skus || {};

  const basketItems = cartContents.map((cartItem, index) => {
    const { author, title, price, thumbnail, id, inventory, slug } = skus[
      cartItem[0]
    ];

    return (
      <BasketListItem
        title={author}
        subtitle={title}
        price={price}
        quantity={cartItem[1]}
        thumbnail={thumbnail}
        id={cartItem[0]}
        stock={inventory}
        key={id}
        index={index}
        slug={slug}
      />
    );
  });
  return <BasketItemsSection>{basketItems}</BasketItemsSection>

};
