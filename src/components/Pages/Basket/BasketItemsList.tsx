import React, { useContext } from "react";
import { CartContext } from "../../../state/CartProvider";
import styled from "styled-components/macro";

import BasketListItem from "./BasketListItem";

const BasketItemsSection = styled.section`
  padding-left: 5%;
  padding-right: 5%;
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
  const { contents } = useContext(CartContext);
  const basketItems = contents.map((product, index: number) => {
    const {
      author,
      title,
      price,
      quantity,
      thumbnail,
      id,
      inventory,
      slug,
    } = product;
    return (
      <BasketListItem
        title={author}
        subtitle={title}
        price={price}
        quantity={quantity}
        thumbnail={thumbnail}
        id={id}
        stock={inventory}
        key={id}
        index={index}
        slug={slug}
      />
    );
  });
  return (
    <div>
      {contents.length > 0 ? (
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
    </div>
  );
};
