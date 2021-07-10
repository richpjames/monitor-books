import React, { FC } from "react";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import {
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  ListWrap,
  ListItemWrap,
  ItemType,
  ListItemLink
} from "../../Components/Common";
import { EagerLoadWrapper } from "../../Components/Common/EagerLoadWrapper";
import Layout from "../../Components/layout";
import { productMapper } from "../../api/mappers";
import SEO from "../../Components/seo";
import { useSetBackground } from "../../hooks/useSetBackground";
import { Slideshow } from "../../Components/Global/Slideshow";
import { useShowSlideshow } from "../../hooks/useShowSlideshow";
import { useIsMobile } from "../../hooks/useIsMobile";


const ProductsPage: FC<PageProps> = ({ location }) => {
  const showSlideshow = useShowSlideshow();
  const isMobile = useIsMobile();
  const {
    allStrapiBooks,
  }: { allStrapiBooks: { nodes: ApiProduct[] } } = useStaticQuery(graphql`
 query {
  allStrapiBooks(sort: {order: DESC, fields: publishedDate}) {
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


  const books = allStrapiBooks.nodes.map((book, index) => {
    const mappedBook = productMapper(book);
    const { title, slug, thumbnail, author, yearPublished } = mappedBook;
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
  })

  const eagerLoadedBooks = books.filter((_, index) => {
    const limit = isMobile ? 0 : 2;
    return index < limit;
  })

  useSetBackground('product-background-colour')

  return (
    <>
      {showSlideshow && <><Slideshow /><EagerLoadWrapper>{eagerLoadedBooks}</EagerLoadWrapper></>}

      <Layout
        pathname={location.pathname}
      >
        <SEO title="Books" description="Publications from Monitor books" />
        <ListWrap>
          {!showSlideshow && books}
        </ListWrap>
      </Layout>
    </>
  );
};
export default ProductsPage;
