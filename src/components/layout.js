import React from "react";
import { Header } from "./Global/Header";
import { useStaticQuery, graphql } from "gatsby";
import { PageWrapper } from "./Common";
import { receiveProducts } from "../state/actions/index";
import "../../App.css";
import ProductsProvider from "../state/ProductsProvider";
import CartProvider from "../state/CartProvider";

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <ProductsProvider>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </ProductsProvider>
    </PageWrapper>
  );
};

export default Layout;
