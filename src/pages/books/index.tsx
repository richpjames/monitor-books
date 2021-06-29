import React, { FunctionComponent, useLayoutEffect } from "react";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import {
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  ListWrap,
  ListItemWrap,
  ItemType,
  ListItemLink,
} from "../../Components/Common";
import Layout from "../../Components/layout";
import { productMapper } from "../../api/mappers";
import SEO from "../../Components/seo";
import { useSetBackground } from "../../hooks/useSetBackground";

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
          publishedDate
          thumbnail_image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 350)
              }
            }
          }
        }
      }
    }
  `);
  useSetBackground('product-background-colour')

  const sortedBooks = allStrapiBooks.nodes
    .map((book) => {
      const { slug, title, author, thumbnail, publishedDate, yearPublished } = productMapper(
        book
      );
      return { slug, title, author, thumbnail, publishedDate, yearPublished };
    })
    .sort((a, b) => (b.publishedDate as any) - (a.publishedDate as any));
  return (
    <Layout
      pathname={location.pathname}
    >
      <SEO title="Books" description="Publications from Monitor books" />
      <ListWrap>
        {sortedBooks.map((book, index) => {
          const { title, slug, thumbnail, author, yearPublished } = book;
          const image = getImage(thumbnail);

          const lowercaseTitle = title.toLowerCase();
          const titleCaseTitle = title
            .split(" ")
            .map((word) => `${word[0]}${word.slice(1).toLowerCase()}`)
            .join(" ");

          return (
            <ListItemLink to={slug} key={slug}>
              <ListItemWrap id={`${slug}-container`}>
                <GatsbyImage
                  id={`${slug}-photo`}
                  image={image}
                  alt={`a photo of the book ${lowercaseTitle} by ${author}`}
                />
                <MetaInfoContainer index={index} width="40%">
                  <ListItemTitle id={`${slug}-title`}>
                    {titleCaseTitle}
                  </ListItemTitle>
                  <ListItemSubtitle id={`${slug}-subtitle`}>
                    {author}
                  </ListItemSubtitle>
                  <ItemType>Book, {yearPublished}</ItemType>
                </MetaInfoContainer>
              </ListItemWrap>
            </ListItemLink>
          );
        })}
      </ListWrap>
    </Layout>
  );
};
export default ProductsPage;
