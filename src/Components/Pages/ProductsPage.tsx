import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import styled from "styled-components/macro";

import { mainImageUrl } from "../../constants";
import { PageWrapper } from "../Common/Common";
import {
  ListTitle,
  ListItemContainer,
  PhotoWrap,
  Photo,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
} from "../Common/ListComponents";

interface IProps extends RouteComponentProps {
  books: byId<Product>;
  bookIds: visibileIds;
}

const ListWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

export const ProductsPage = ({ books, bookIds }: IProps) => {
  const bookDetails = bookIds
    .map((bookId) => books[bookId])
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  return (
    <PageWrapper>
      <ListTitle>Books</ListTitle>
      <ListWrap>
        {bookDetails.map((bookDetail, index) => (
          <ListItemContainer
            index={index}
            height="50%"
            width="100%"
            horizontalMargin="0rem"
            topMargin="1rem"
            onClick={() => navigate(bookDetail.slug)}
            key={index}
          >
            <PhotoWrap width="40%">
              <Photo
                src={`${mainImageUrl}${bookDetail.imagePath}/thumbnails/${bookDetail.thumbnail}`}
              />
            </PhotoWrap>
            <MetaInfoContainer index={index} width="40%">
              <ListItemTitle>{bookDetail.title}</ListItemTitle>
              <ListItemSubtitle>{bookDetail.author}</ListItemSubtitle>
            </MetaInfoContainer>
          </ListItemContainer>
        ))}
      </ListWrap>
    </PageWrapper>
  );
};
