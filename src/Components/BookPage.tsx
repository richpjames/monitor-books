import React from "react";
import { RouteComponentProps } from "@reach/router";

import Photos from "./Common/Photos";
import Title from "./Common/BookTitle";
import Text from "./Common/Text";
import { PageWrapper, InfoSection } from "./Common/Common";
import BuyButton from "./Common/BuyButton";

interface IProps extends RouteComponentProps {
  book: Book;
}

const BookDetails = (props: IProps) => {
  const { photos, title, author, blurb1, blurb2 } = props.book;
  return (
    <PageWrapper>
      <Photos photos={photos} />
      <InfoSection>
        <Title title={author} subtitle={title} />
        <Text leftText={blurb1} rightText={blurb2} />
      </InfoSection>
      <BuyButton />
    </PageWrapper>
  );
};

export default BookDetails;
