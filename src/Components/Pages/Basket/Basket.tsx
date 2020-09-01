import React from "react";
import styled from "styled-components/macro";

import BasketListItem from "./BasketListItem";
import { LoadingSpinner } from "../../Common/LoadingSpinner";
import { CTAButton } from "../../Common/CTAButton";
import { BasketTotal } from "./BasketTotal";
import { AmericaTitle } from "../../Common/Titles";
import { PageWrapper } from "../../Common/Common";

const PageContainer = styled.div`
  padding: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

const CheckoutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BasketItemsSection = styled.section`
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
`;

const BasketTitle = styled(AmericaTitle)`
  width: 100%;
  text-align: center;
  display: block;
`;

const EmptyCartMessage = styled.div`
  padding-top: 25%;
  padding-bottom: 25%;
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

  const cartItems = productIds.map((productId: string, index: number) => (
    <BasketListItem
      title={productsById[productId].author}
      subtitle={productsById[productId].title}
      price={productsById[productId].price}
      quantity={quantityById[productId]}
      id={productId}
      imageSrc={`https://www.richjames.co.uk/img/${productsById[productId].path}/thumbnails/${productsById[productId].thumbnail}`}
      stock={productsById[productId].inventory}
      key={productsById[productId].id}
      index={index}
    />
  ));

  return (
    <PageWrapper>
      <PageContainer>
        <BasketTitle>Basket</BasketTitle>
        {!loading ? (
          <>
            {hasProducts ? (
              <>
                <BasketItemsSection>{cartItems}</BasketItemsSection>
                <CheckoutSection>
                  <BasketTotal total={total} />
                  <CTAButton
                    onClick={onCheckoutClicked}
                    disabled={!hasProducts}
                  >
                    Checkout
                  </CTAButton>
                </CheckoutSection>
              </>
            ) : (
              <EmptyCartMessage>
                Please add some products to cart.
              </EmptyCartMessage>
            )}
          </>
        ) : (
          <LoadingSpinner />
        )}
      </PageContainer>
    </PageWrapper>
  );
};
export default Basket;
