import React from "react";
import styled from "@emotion/styled";

import "../css/app.css";
import "../css/system.css";

import { mobileBreakpoint } from "../constants";

import { Header } from "./Global/Header";
import ProductsProvider from "../state/ProductsProvider";
import CartProvider from "../state/CartProvider";
import { Footer } from "./Global/Footer";

const Main = styled.section`
  width: min(var(--page-max-width), 95%);
  flex: 1;
`;

export const PageWrapper = styled.main<{ backgroundColour: string }>`
  padding-top: var(--spacing-6);
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
  padding-bottom: var(--spacing-10);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColour};
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding: var(--spacing-6), var(--spacing-2);
  }
`;

export const IntroPageWrapper = styled(PageWrapper)`
  justify-content: center;
`;

interface LayoutProps {
  children: any;
  backgroundColour: CssHexValue;
}

const Layout: React.FC<LayoutProps> = ({ children, backgroundColour }) => {
  console.log({ backgroundColour });
  return (
    <PageWrapper backgroundColour={backgroundColour}>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </CartProvider>
      </ProductsProvider>
    </PageWrapper>
  );
};

export default Layout;
