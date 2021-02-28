import React from "react";
import { Header } from "./Global/Header";
import { useStaticQuery, graphql } from "gatsby";
import { PageWrapper } from "./Common";
import { receiveProducts } from "../state/actions/index";
import "../../App.css";

const Layout = ({ children }) => {
  const { allStrapiBooks } = useStaticQuery(graphql`
    query MyQuery {
      allStrapiBooks {
        nodes {
          slug
          devPriceId
          prodPriceId
          inventory
          id
        }
      }
    }
  `);
  receiveProducts(allStrapiBooks.nodes);

  return (
    <PageWrapper>
      <Header />
      {children}
    </PageWrapper>
  );
};

export default Layout;
