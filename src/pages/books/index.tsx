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
import styled from "@emotion/styled";
import { SanityBackgroundColours } from "./{sanityProduct.slug}";

const Image = styled(GatsbyImage)`
  height: 100%;
`;

const ProductsPage: FC<PageProps> = () => {
  const {
    allSanityProduct,
    sanityBackgroundColours,
  }: {
    allSanityProduct: {
      nodes: ApiListPageProduct[];
    };
    sanityBackgroundColours: SanityBackgroundColours;
  } = useStaticQuery(graphql`
    query {
      allSanityProduct(sort: { page_order: DESC }) {
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
      sanityBackgroundColours {
        products
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

  const { products: productsBackgroundColour } = sanityBackgroundColours;

  return (
    <>
      <Layout backgroundColour={productsBackgroundColour}>
        <SEO title="Books" description="Publications from Monitor books" />
        <ListWrap>{books}</ListWrap>
      </Layout>
    </>
  );
};
export default ProductsPage;
