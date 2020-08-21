import React from "react";
import BasketListItem from "./BasketListItem";

type IProps = {
  productIds: string[];
  productsById: { [index: string]: Book };
  total: string;
  onCheckoutClicked?: (click: React.MouseEvent) => void;
  quantityById: { [key: string]: number };
};

const Basket = ({
  productIds,
  productsById,
  total,
  onCheckoutClicked,
  quantityById,
}: IProps): React.ReactElement => {
  const hasProducts = productIds?.length > 0;

  const nodes = hasProducts ? (
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
    <div>
      <div>{nodes}</div>
      <p>Total: £{total}</p>
      <button onClick={onCheckoutClicked} disabled={hasProducts}>
        Checkout
      </button>
    </div>
  );
};
export default Basket;
