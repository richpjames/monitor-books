import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import styled from "styled-components/macro";

import { mainImageUrl } from "../../constants";
import {
  ListItemContainer,
  ListItemPhotoWrap,
  ListItemPhoto,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  PageWrapper,
} from "../Common";
import { PageTitle } from "../Common/Titles";

interface Props extends RouteComponentProps {
  books: byId<Product>;
  bookIds: visibileIds;
}

const ListWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;

export const ProductsPage = ({ books, bookIds }: Props) => {
  const bookDetails = bookIds
    .map((bookId) => books[bookId])
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  return (
    <PageWrapper>
      <PageTitle>Books</PageTitle>
      <ListWrap>
        {bookDetails.map((book, index) => (
          <ListItemContainer
            index={index}
            height="50%"
            width="100%"
            horizontalMargin="0rem"
            topMargin="1rem"
            onClick={() => navigate(book.slug)}
            key={index}
          >
            <ListItemPhotoWrap width="40%">
              <ListItemPhoto
                src={`${mainImageUrl}${book.imagePath}/thumbnails/${book.thumbnail}`}
              />
            </ListItemPhotoWrap>
            <MetaInfoContainer index={index} width="40%">
              <ListItemTitle>{book.title}</ListItemTitle>
              <ListItemSubtitle>{book.author}</ListItemSubtitle>
            </MetaInfoContainer>
          </ListItemContainer>
        ))}
      </ListWrap>
    </PageWrapper>
  );
};
