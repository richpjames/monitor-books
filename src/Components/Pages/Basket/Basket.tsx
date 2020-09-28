import React from "react";
import styled from "styled-components/macro";

import BasketListItem from "./BasketListItem";
import { LoadingSpinner } from "../../Common/LoadingSpinner";
import { CTAButton } from "../../Common/";
import { BasketTotal } from "./BasketTotal";
import { ShippingCost } from "./ShippingCost";
import { PageWrapper } from "../../Common/Common";
import { ListTitle } from "../../Common/ListComponents";
import { mainImageUrl, text } from "../../../constants/";

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

const EmptyCartMessage = styled.div`
  padding-top: 25%;
  padding-bottom: 25%;
`;

const ShippingWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 17.5rem;
`;

const ShippingLabel = styled.label`
  padding-right: 0.5rem;
  color: ${text};
`;

const ShippingSelector = styled.select`
  width: 7.5rem;
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

  const twoDecimalPlaces = (number: number) =>
    (Math.round(number * 100) / 100).toFixed(2);

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
              <CheckoutSection>
                <ShippingWrapper>
                  <ShippingLabel htmlFor="shipping">
                    Postal region:
                  </ShippingLabel>
                  <ShippingSelector
                    onChange={(event) => {
                      setShipping(+event.target.value);
                    }}
                  >
                    {shippingOptions.map((shippingRegion, index) => (
                      <option value={index} key={index}>
                        {shippingRegion.region}
                      </option>
                    ))}
                  </ShippingSelector>
                  <ShippingCost total={`${twoDecimalPlaces(shipping.price)}`} />
                </ShippingWrapper>

                <BasketTotal
                  total={`${twoDecimalPlaces(+total + shipping.price)}`}
                />
                <CTAButton onClick={onCheckoutClicked} disabled={!hasItems}>
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
    </PageWrapper>
  );
};
export default Basket;
