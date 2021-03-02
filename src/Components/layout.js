import React from "react";
import { Header } from "./Global/Header";
import { PageWrapper } from "./Common";
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
