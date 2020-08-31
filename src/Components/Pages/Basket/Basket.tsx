import React from "react";
import styled from "styled-components/macro";

import BasketListItem from "./BasketListItem";
import { LoadingSpinner } from "../../Common/LoadingSpinner";
import { Button } from "../../Common/CTAButton";
import { BasketTotal } from "./BasketTotal";
import { AmericaTitle } from "../../Common/Titles";

const PageContainer = styled.div`
  padding: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckoutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BasketItemsSection = styled.section`
  width: 100%;
`;

const BasketTitle = styled(AmericaTitle)`
  width: 100%;
  text-align: center;
  display: block;
`;

type IProps = {
  productIds: string[];
  productsById: { [index: string]: Book };
  total: string;
  onCheckoutClicked: (click: React.MouseEvent) => void;
  quantityById: { [key: string]: number };
  loading: boolean;
};

const Basket = ({
  productIds,
  productsById,
  total,
  onCheckoutClicked,
  quantityById,
  loading,
}: IProps): React.ReactElement => {
  const hasProducts = productIds?.length > 0;

  const cartItems = hasProducts ? (
    productIds.map((productId: string) => (
      <BasketListItem
        title={productsById[productId].title}
        subtitle={productsById[productId].author}
        price={productsById[productId].price}
        quantity={quantityById[productId]}
        id={productId}
        imageSrc={`https://www.richjames.co.uk/img/${productsById[productId].path}/thumbnails/${productsById[productId].thumbnail}`}
        stock={productsById[productId].inventory}
        key={productsById[productId].id}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <PageContainer>
      <BasketTitle>Basket</BasketTitle>

      {!loading ? (
        <>
          <BasketItemsSection>{cartItems}</BasketItemsSection>
          <CheckoutSection>
            <BasketTotal total={total} />
            <Button onClick={onCheckoutClicked} disabled={!hasProducts}>
              Checkout
            </Button>
          </CheckoutSection>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </PageContainer>
  );
};
export default Basket;
