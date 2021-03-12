import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import styled from "styled-components/macro";

import {
  ListItemPhotoWrap,
  ListItemPhoto,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
} from "../../Components/Common";
import Layout from "../../Components/layout";
import { productMapper } from "../../api/mappers";

const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: var(--medium-component-spacing);
`;

const ListItemWrap = styled.li<{
  index: number;
  to: string;
  id: string;
}>`
  margin-top: var(--x-small-component-spacing);
  display: flex;
  width: 100%;
`;

const ItemType = styled.h5`
  border-top: 2px solid var(--main-border-colour);
  width: 100%;
  padding: 0;
`;

const ProductsPage: FunctionComponent<PageProps> = ({ location }) => {
  const {
    allStrapiBooks,
  }: { allStrapiBooks: { nodes: ApiProduct[] } } = useStaticQuery(graphql`
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
    <Layout pathname={location.pathname} backgroundColour="var(--purple)">
      <ListWrap>
        {allStrapiBooks.nodes.map((book, index) => {
          const { slug, title, author, thumbnail } = productMapper(book);
          const lowercaseTitle = title.toLocaleLowerCase();
          return (
            <ListItemWrap
              index={index}
              key={index}
              to={slug}
              id={`${slug}-container`}
            >
              <ListItemPhotoWrap>
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
                <ItemType>Book, 2020</ItemType>
              </MetaInfoContainer>
            </ListItemWrap>
          );
        })}
      </ListWrap>
    </Layout>
  );
};
export default ProductsPage;
