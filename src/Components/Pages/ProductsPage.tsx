import React, { FunctionComponent } from "react";
import { RouteComponentProps, navigate, Link } from "@reach/router";
import styled from "styled-components/macro";

import { mainImageUrl, offWhite } from "../../constants";
import {
  ListItemContainer,
  ListItemPhotoWrap,
  ListItemPhoto,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  PageWrapper,
  AddToBasketButton,
} from "../Common";
import { PageTitle } from "../Common/Titles";

interface Props extends RouteComponentProps {
  books: byId<Product>;
  bookIds: visibileIds;
}

const ButtonWrap = styled.div`
  margin-top: auto;
  padding-bottom: 2.5rem;
`;

const ListWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;

export const ProductsPage: FunctionComponent<Props> = ({ books, bookIds }) => {
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
        {bookDetails.map((book, index) => {
          const { slug, title, author, thumbnail, imagePath, id } = book;
          return (
            <ListItemContainer
              index={index}
              height="50%"
              width="100%"
              horizontalMargin="0rem"
              topMargin="1rem"
              key={index}
              to={slug}
            >
              <ListItemPhotoWrap width="40%">
                <ListItemPhoto
                  src={`${mainImageUrl}${imagePath}/thumbnails/${thumbnail}`}
                />
              </ListItemPhotoWrap>
              <MetaInfoContainer index={index} width="40%">
                <ListItemTitle>{title}</ListItemTitle>
                <ListItemSubtitle>{author}</ListItemSubtitle>
                <ButtonWrap>
                  <AddToBasketButton
                    id={id}
                    borderColour={offWhite}
                    linkTo="/books"
                  />
                </ButtonWrap>
              </MetaInfoContainer>
            </ListItemContainer>
          );
        })}
      </ListWrap>
    </PageWrapper>
  );
};
