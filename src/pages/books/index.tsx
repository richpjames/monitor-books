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
  ListItemLink,
} from "../../Components/Common";
import Layout from "../../Components/layout";
import { productListPageMapper } from "../../api/mappers";
import SEO from "../../Components/seo";
import { useSetBackground } from "../../hooks/useSetBackground";
import styled from "@emotion/styled";

const Image = styled(GatsbyImage)`
  height: 100%;
`;

const ProductsPage: FC<PageProps> = () => {
  useSetBackground("products");

  const {
    allSanityProduct,
  }: { allSanityProduct: { nodes: ApiListPageProduct[] } } =
    useStaticQuery(graphql`
      query {
        allSanityProduct(sort: { order: DESC, fields: page_order }) {
          nodes {
            slug
            title
            author
            date_published
            product_type
            thumbnail_image {
              asset {
                gatsbyImageData(placeholder: BLURRED, fit: FILLMAX, width: 350)
              }
            }
          }
        }
      }
    `);

  const books = allSanityProduct.nodes.map((book, index) => {
    const mappedBook = productListPageMapper(book);
    const { title, slug, thumbnail, author, yearPublished, productType } =
      mappedBook;
    const image = getImage(thumbnail);

    return (
      <ListItemLink to={slug} key={slug}>
        <ListItemWrap id={`${slug}-container`}>
          {image && (
            <Image
              id={`${slug}-photo`}
              image={image}
              alt={`a photo of the book ${title} by ${author}`}
              loading="eager"
            />
          )}
          <MetaInfoContainer index={index} width="40%">
            <ListItemTitle id={`${slug}-title`}>{title}</ListItemTitle>
            <ListItemSubtitle id={`${slug}-subtitle`}>
              {author}
            </ListItemSubtitle>
            <ItemType>
              {productType && `${productType},`} {yearPublished}
            </ItemType>
          </MetaInfoContainer>
        </ListItemWrap>
      </ListItemLink>
    );
  });

  return (
    <>
      <Layout>
        <SEO title="Books" description="Publications from Monitor books" />
        <ListWrap>{books}</ListWrap>
      </Layout>
    </>
  );
};
export default ProductsPage;
