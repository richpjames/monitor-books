import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components/macro";

import {
  ListItemContainerWrap,
  ListItemPhotoWrap,
  ListItemPhoto,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
} from "../../Components/Common";
import { PageTitle } from "../../Components/Common/Titles";
import Layout from "../../Components/layout";
import { productMapper } from "../../api/mappers";

interface Props {
  books: ById<Product>;
  bookIds: VisibleIds;
}

const ListWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;

const ProductsPage: FunctionComponent<Props> = ({ books, bookIds }) => {
  const { allStrapiBooks } = useStaticQuery(graphql`
    query {
      allStrapiBooks {
        nodes {
          slug
          title
          author
          thumbnail
        }
      }
    }
  `);
  return (
    <Layout>
      <PageTitle>Books</PageTitle>
      <ListWrap>
        {allStrapiBooks.nodes.map((book, index) => {
          const { slug, title, author, thumbnail } = productMapper(book);
          const lowercaseTitle = title.toLocaleLowerCase();

          return (
            <ListItemContainerWrap
              index={index}
              height="50%"
              width="100%"
              horizontalmargin="0rem"
              topmargin="1rem"
              key={index}
              to={slug}
              id={`${slug}-container`}
            >
              <ListItemPhotoWrap width="30%">
                <ListItemPhoto
                  id={`${slug}-photo`}
                  src={thumbnail}
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
    </Layout>
  );
};
export default ProductsPage;
