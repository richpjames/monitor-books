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
import Layout from "../../Components/layout";
import { productListPageMapper } from "../../api/mappers";
import SEO from "../../Components/seo";
import { useSetBackground } from "../../hooks/useSetBackground";
import { Slideshow } from "../../Components/Global/Slideshow";
import { useShowSlideshow } from "../../hooks/useShowSlideshow";
import { useIsMobile } from "../../hooks/useIsMobile";


const ProductsPage: FC<PageProps> = () => {
  const [showSlideshow, setShowSlideshow] = useShowSlideshow();
  const isMobile = useIsMobile();
  const {
    allStrapiBooks,
  }: { allStrapiBooks: { nodes: ApiListPageProduct[] } } = useStaticQuery(graphql`
  query {
    allStrapiBooks(sort: {order: DESC, fields: publishedDate}) {
      nodes {
        slug
        title
        author
        publishedDate
        productType
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
    const mappedBook = productListPageMapper(book);
    const { title, slug, thumbnail, author, yearPublished } = mappedBook;
    let { productType } = mappedBook
    const image = getImage(thumbnail);

    return (
      <ListItemLink to={slug} key={slug}>
        <ListItemWrap id={`${slug}-container`}>
          {image && <GatsbyImage
            id={`${slug}-photo`}
            image={image}
            alt={`a photo of the book ${title} by ${author}`}
            loading="eager"
          />}
          <MetaInfoContainer index={index} width="40%">
            <ListItemTitle id={`${slug}-title`}>
              {title}
            </ListItemTitle>
            <ListItemSubtitle id={`${slug}-subtitle`}>
              {author}
            </ListItemSubtitle>
            <ItemType>{productType && `${productType},`} {yearPublished}</ItemType>
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
      {showSlideshow && (
        <Slideshow show={setShowSlideshow}>{eagerLoadedBooks}</Slideshow>
      )}

      <Layout>
        <SEO title="Books" description="Publications from Monitor books" />
        <ListWrap>
          {!showSlideshow && books}
        </ListWrap>
      </Layout>
    </>
  );
};
export default ProductsPage;
