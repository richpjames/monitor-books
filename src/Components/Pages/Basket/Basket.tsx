import React from "react";
import PropTypes from "prop-types";
import BasketListItem from "./BasketListItem";

interface IProps {
  products: Book[];
  total: string;
  onCheckoutClicked: (products: []) => void;
}

const Basket = ({ products, total, onCheckoutClicked }: IProps) => {
  const hasProducts = products?.length > 0;
  const nodes = hasProducts ? (
    products.map((product: Book) => (
      <BasketListItem
        title={product.title}
        subtitle={product.author}
        price={product.price}
        quantity={product.inventory}
        imageSrc={`https://www.richjames.co.uk/img/${product.path}/thumbnails/${product.thumbnail}`}
        key={product.id}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
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
