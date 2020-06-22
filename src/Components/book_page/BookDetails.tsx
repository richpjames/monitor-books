import React from "react";
import { RouteComponentProps } from "@reach/router";

import Photos from "./Photos";
import Text from "./Text";
import Title from "./Title";
import BuyButton from "./BuyButton";

interface IProps extends RouteComponentProps {
  book: Book;
}

const BookDetails = (props: IProps) => {
  const { photos, title, author, blurb1, blurb2 } = props.book;
  return (
    <>
      <Photos photos={photos} />
      <Title title={title} author={author} />
      <Text leftText={blurb1} rightText={blurb2} />
      <BuyButton />
    </>
  );
};

export default BookDetails;
