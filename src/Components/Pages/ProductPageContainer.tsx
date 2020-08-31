import React from "react";
import { RouteComponentProps } from "@reach/router";
import { connect } from "react-redux";

import { addToCart } from "../../actions";
import ProductPage from "./ProductPage";

interface IProps extends RouteComponentProps {
  product: Book;
  cartQuantityById?: { [key: string]: number };
  inventoryQuantity?: number;
  addToCart?: (productId: string) => void;
}

const ProductPageContainer = ({
  product,
  inventoryQuantity,
  cartQuantityById,
  addToCart,
}: IProps) => {
  const { photos, title, author, blurb1, blurb2, id } = product;

  return (
    <ProductPage
      inventoryQuantity={inventoryQuantity}
      cartQuantityById={cartQuantityById}
      addToCart={addToCart}
      photos={photos}
      title={title}
      author={author}
      leftDescription={blurb1}
      rightDescription={blurb2}
      id={id}
    />
  );
};

const mapStateToProps = (state: State, ownProps: IProps) => ({
  cartQuantityById: state.cart.quantityById,
  inventoryQuantity: state.products.byId[ownProps.product.id].inventory,
});

export default connect(mapStateToProps, { addToCart })(ProductPageContainer);
