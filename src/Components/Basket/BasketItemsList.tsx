import React, { useContext } from "react";
import styled from "styled-components/macro";

import { CartContext } from "../../state/CartProvider";
import { ProductsContext } from "../../state/ProductsProvider";

import BasketListItem from "./BasketListItem";

const BasketItemsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
`;
const EmptyCartMessage = styled.p`
  padding-top: 15%;
  text-align: center;
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
  return (
    <>
      {cartContents.length > 0 ? (
        <BasketItemsSection>{basketItems}</BasketItemsSection>
      ) : (
        <EmptyCartMessage id="empty-basket-message">
          Your basket is empty
          <br />
          <span role="img" aria-label="unhappy face">
            😢
          </span>
        </EmptyCartMessage>
      )}
    </>
  );
};
