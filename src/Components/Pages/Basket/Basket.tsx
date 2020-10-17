import React from "react";
import styled from "styled-components/macro";

import BasketListItem from "./BasketListItem";
import { LoadingSpinner } from "../../Common/LoadingSpinner";

import { PageWrapper } from "../../Common/Common";
import { ListTitle } from "../../Common/ListComponents";
import { mainImageUrl } from "../../../constants/";

import { CheckoutSection } from "./CheckoutSection";

const BasketItemsSection = styled.section`
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
`;

const EmptyCartMessage = styled.div`
  padding-top: 25%;
  padding-bottom: 25%;
`;

type IProps = {
  hasItems: boolean;
  loading: boolean;
  onCheckoutClicked: (click: React.MouseEvent) => void;
  productIds: string[];
  productsById: { [index: string]: Product };
  quantityById: { [key: string]: number };
  setShipping: (index: number) => void;
  shipping: Shipping;
  shippingOptions: Shipping[];
  total: string;
};

const Basket = ({
  hasItems,
  loading,
  onCheckoutClicked,
  productIds,
  productsById,
  quantityById,
  setShipping,
  shipping,
  shippingOptions,
  total,
}: IProps): React.ReactElement => {
  const hasProducts = productIds?.length > 0;

  const cartItems = productIds.map((productId: string, index: number) => (
    <BasketListItem
      title={productsById[productId].author}
      subtitle={productsById[productId].title}
      price={productsById[productId].price}
      quantity={quantityById[productId]}
      id={productId}
      imageSrc={`${mainImageUrl}${productsById[productId].imagePath}/thumbnails/${productsById[productId].thumbnail}`}
      stock={productsById[productId].inventory}
      key={productsById[productId].id}
      index={index}
      slug={productsById[productId].slug}
    />
  ));

  return (
    <PageWrapper>
      <ListTitle>Basket</ListTitle>
      {!loading ? (
        <>
          {hasProducts ? (
            <>
              <BasketItemsSection>{cartItems}</BasketItemsSection>
              <CheckoutSection
                hasItems={hasItems}
                onCheckoutClicked={onCheckoutClicked}
                setShipping={setShipping}
                shipping={shipping}
                shippingOptions={shippingOptions}
                total={total}
              />
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
    </PageWrapper>
  );
};
export default Basket;
