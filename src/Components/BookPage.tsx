import React from "react";
import { RouteComponentProps } from "@reach/router";

import Photos from "./Common/Photos";
import MetaSection from "./Common/MetaSection";
import { PageContainer } from "./Common/Common";

interface IProps extends RouteComponentProps {
  book: Book;
}

const BookDetails = (props: IProps) => {
  const { photos, title, author, blurb1, blurb2 } = props.book;
  return (
    <PageContainer>
      <Photos photos={photos} />
      <MetaSection
        title={title}
        subtitle={author}
        leftText={blurb1}
        rightText={blurb2}
      />
    </PageContainer>
  );
};

export default BookDetails;
