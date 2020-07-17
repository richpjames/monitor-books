import React, { Dispatch } from "react";
import { RouteComponentProps } from "@reach/router";
import { connect } from "react-redux";

import Photos from "../Common/Photos";
import Title from "../Common/Title";
import Text from "../Common/Text";
import { PageWrapper, InfoSection } from "../Common/Common";
import BuyButton from "../Common/BuyButton";
import { addToCart } from "../../redux/actions";

interface IProps extends RouteComponentProps {
  book: Book;
  addBookToBasket: Dispatch<string>;
}

const BookDetails = (props: IProps) => {
  const { addBookToBasket, book } = props;
  const { photos, title, author, blurb1, blurb2, id } = book;

  return (
    <PageWrapper>
      <Photos photos={photos} />
      <InfoSection>
        <Title title={author} subtitle={title} />
        <Text leftText={blurb1} rightText={blurb2} />
      </InfoSection>
      <BuyButton id={id} addToBasket={addBookToBasket} />
    </PageWrapper>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addBookToBasket: (id: string) => dispatch(addToCart(id)),
});

export default connect(null, mapDispatchToProps)(BookDetails);
