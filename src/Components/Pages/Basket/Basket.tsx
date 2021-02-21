import React from "react";

import BasketListItem from "./BasketListItem";
import { LoadingSpinner } from "../../Common/LoadingSpinner";

import { PageWrapper, ErrorText } from "../../Common/";
import { ListTitle } from "../../Common/ListComponents";

import { BasketItems } from "./BasketItems";

type IProps = {
  hasItems: boolean;
  hasError: boolean;
  loading: boolean;
  onCheckoutClicked: (click: React.MouseEvent) => void;
  productIds: string[];
  productsById: ById<Product>;
  quantityById: ProductQuantityById;
  setShipping: (index: number) => void;
  shipping: Shipping;
  shippingOptions: Shipping[];
  total: number;
};

const Basket = ({
  hasError,
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
  const basketItems = productIds.map((productId: string, index: number) => (
    <BasketListItem
      title={productsById[productId].author}
      subtitle={productsById[productId].title}
      price={productsById[productId].price}
      quantity={quantityById[productId]}
      thumbnail={productsById[productId].thumbnail}
      id={productId}
      stock={productsById[productId].inventory}
      key={productsById[productId].id}
      index={index}
      slug={productsById[productId].slug}
    />
  ));

  let basketComponent;
  if (!loading && !hasError) {
    basketComponent = (
      <BasketItems
        basketItems={basketItems}
        hasItems={hasItems}
        shipping={shipping}
        setShipping={setShipping}
        shippingOptions={shippingOptions}
        total={total}
        onCheckoutClicked={onCheckoutClicked}
      />
    );
  } else if (loading && !hasError) {
    basketComponent = <LoadingSpinner />;
  } else if (hasError) {
    basketComponent = (
      <ErrorText
        line1="Something has gone wrong :("
        line2="Please try again or contact contact@monitorbooks.co.uk"
      />
    );
  }

  return (
    <PageWrapper>
      <ListTitle id="basket-title">Basket</ListTitle>
      {basketComponent}
    </PageWrapper>
  );
};
export default Basket;
