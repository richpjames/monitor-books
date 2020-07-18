import React, { Dispatch } from "react";
import { RouteComponentProps } from "@reach/router";

import Photos from "../Common/Photos";
import Title from "../Common/Title";
import Text from "../Common/Text";
import { PageWrapper, InfoSection } from "../Common/Common";
import BuyButton from "../Common/BuyButton";

interface IProps extends RouteComponentProps {
  book: Book;
  addBookToBasket: Dispatch<string>;
}

const BookPage = (props: IProps) => {
  const { book, addBookToBasket } = props;
  const { photos, title, author, blurb1, blurb2 } = book;

  return (
    <PageWrapper>
      <Photos photos={photos} />
      <InfoSection>
        <Title title={author} subtitle={title} />
        <Text leftText={blurb1} rightText={blurb2} />
      </InfoSection>
      <BuyButton addToBasket={addBookToBasket} product={book} />
    </PageWrapper>
  );
};

export default BookPage;
