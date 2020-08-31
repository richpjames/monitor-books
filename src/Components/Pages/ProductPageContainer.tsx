import React from "react";
import { RouteComponentProps } from "@reach/router";
import { connect, ConnectedProps } from "react-redux";

import { addToCart } from "../../actions";
import ProductPage from "./ProductPage";

interface OwnProps extends RouteComponentProps {
  product: Book;
}

type IProps = PropsFromRedux & OwnProps;

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

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  cartQuantityById: state.cart.quantityById,
  inventoryQuantity: state.products.byId[ownProps.product.id].inventory,
  product: ownProps.product,
});
const connector = connect(mapStateToProps, { addToCart });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductPageContainer);
