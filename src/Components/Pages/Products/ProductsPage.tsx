import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { mainImageUrl } from "../../../constants";
import {
  ListItemContainerWrap,
  ListItemPhotoWrap,
  ListItemPhoto,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  PageWrapper,
} from "../../Common";
import { PageTitle } from "../../Common/Titles";

interface Props extends RouteComponentProps {
  books: ById<Product>;
  bookIds: VisibileIds;
}

const ListWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;

export const ProductsPage: FunctionComponent<Props> = ({ books, bookIds }) => {
  return (
    <PageWrapper>
      <PageTitle>Books</PageTitle>
      <ListWrap>
        {bookIds.map((bookId, index) => {
          const { slug, title, author, thumbnail, imagePath } = books[bookId];
          const lowercaseTitle = title.toLocaleLowerCase();

          return (
            <ListItemContainerWrap
              index={index}
              height="50%"
              width="100%"
              horizontalMargin="0rem"
              topMargin="1rem"
              key={index}
              to={slug}
              id={`${slug}-container`}
            >
              <ListItemPhotoWrap width="30%">
                <ListItemPhoto
                  id={`${slug}-photo`}
                  src={`${mainImageUrl}${imagePath}/thumbnails/${thumbnail}`}
                  alt={`a photo of the book ${lowercaseTitle} by ${author}`}
                />
              </ListItemPhotoWrap>
              <MetaInfoContainer index={index} width="40%">
                <ListItemTitle id={`${slug}-title`}>{title}</ListItemTitle>
                <ListItemSubtitle id={`${slug}-subtitle`}>
                  {author}
                </ListItemSubtitle>
              </MetaInfoContainer>
            </ListItemContainerWrap>
          );
        })}
      </ListWrap>
    </PageWrapper>
  );
};
