import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BasketListItem from "./BasketListItem";

type IProps = {
  productIds: string[];
  productsById: { [index: string]: Book };
  total: string;
  onCheckoutClicked: (click: React.MouseEvent) => void;
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
        imageSrc={`https://www.richjames.co.uk/img/${productsById[productId].path}/thumbnails/${productsById[productId].thumbnail}`}
        key={productsById[productId].id}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked} disabled={hasProducts}>
        Checkout
      </button>
    </div>
  );
};
export default Basket;
