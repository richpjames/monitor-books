import React from "react";
import { RouteComponentProps } from "@reach/router";
import { connect } from "react-redux";

import { addToCart } from "../../actions";
import Photos from "../Common/Photos";
import Title from "../Common/Title";
import Text from "../Common/Text";
import { PageWrapper, InfoSection } from "../Common/Common";
import BuyButton from "../Common/BuyButton";

interface IProps extends RouteComponentProps {
  book: Book;
  cartQuantityById?: { [key: string]: number };
  inventoryQuantity?: number;
  addToCart?: (productId: string) => void;
}

const ProductPage = ({
  book,
  inventoryQuantity,
  cartQuantityById,
  addToCart,
}: IProps) => {
  const { photos, title, author, blurb1, blurb2, id } = book;

  let buttonMessage;
  let buttonDisabled;
  if (
    inventoryQuantity &&
    inventoryQuantity > 0 &&
    cartQuantityById &&
    !cartQuantityById[id]
  ) {
    buttonMessage = "Add to basket";
    buttonDisabled = false;
  } else if (cartQuantityById && cartQuantityById[id] > 0) {
    buttonMessage = "In basket";
    buttonDisabled = true;
  } else {
    buttonMessage = "Out of stock";
    buttonDisabled = true;
  }

  return (
    <PageWrapper>
      <Photos photos={photos} />
      <InfoSection>
        <Title title={author} subtitle={title} />
        <Text leftText={blurb1} rightText={blurb2} />
      </InfoSection>
      {addToCart && (
        <BuyButton onClick={() => addToCart(book.id)} disabled={buttonDisabled}>
          {buttonMessage}
        </BuyButton>
      )}
    </PageWrapper>
  );
};

const mapStateToProps = (state: State, ownProps: IProps) => ({
  cartQuantityById: state.cart.quantityById,
  inventoryQuantity: state.products.byId[ownProps.book.id].inventory,
});

export default connect(mapStateToProps, { addToCart })(ProductPage);
