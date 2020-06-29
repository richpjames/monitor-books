import React from "react";
import { RouteComponentProps } from "@reach/router";

import Photos from "./Common/Photos";
import Title from "./Common/Title";
import Text from "./Common/Text";
import { PageContainer } from "./Common/Common";
import BuyButton from "./Common/BuyButton";

interface IProps extends RouteComponentProps {
  book: Book;
}

const BookDetails = (props: IProps) => {
  const { photos, title, author, blurb1, blurb2 } = props.book;
  return (
    <PageContainer>
      <Photos photos={photos} />
      <Title title={title} subtitle={author} />
      <Text leftText={blurb1} rightText={blurb2} />
      <BuyButton />
    </PageContainer>
  );
};

export default BookDetails;
