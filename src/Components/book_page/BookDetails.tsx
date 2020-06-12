import React from "react";
import { RouteComponentProps } from "@reach/router";

import Photos from "./Photos";
import Text from "./Text";
import Title from "./Title";
import BuyButton from "./BuyButton";

interface IProps extends RouteComponentProps {
  book: {
    title: String;
    author: String;
    photos: Number[];
    blurb1: String;
    blurb2: String;
    price: String;
    publishDate: String;
  };
}

const BookDetails = (props: IProps) => {
  const { photos, title, author, blurb1, blurb2 } = props.book;
  return (
    <>
      <Photos photos={[1, 2, 3, 4]} />
      <Title title={title} author={author} />
      <Text leftText={blurb1} rightText={blurb2} />
      <BuyButton />
    </>
  );
};

export default BookDetails;
