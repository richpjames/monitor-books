import React from "react";
import PropTypes from "prop-types";
import BasketListItem from "./BasketListItem";

interface IProps {
  products: Book[];
  total: string;
  onCheckoutClicked: (products: []) => void;
}

const Basket = ({ products, total, onCheckoutClicked }: IProps) => {
  console.log(products, "prods");
  const hasProducts = products?.length > 0;
  const nodes = hasProducts ? (
    products.map((product: Book) => (
      <BasketListItem
        title={product.title}
        price={product.price}
        quantity={product.inventory}
        key={product.id}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button
      // onClick={onCheckoutClicked}
      // disabled={hasProducts ? "" : "disabled"}
      >
        Checkout
      </button>
    </div>
  );
};

Basket.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};

export default Basket;
