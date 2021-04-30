import React, { useEffect } from "react";
import styled from "styled-components/macro";

import "../css/app.css";
import "../css/system.css";

import { mobileBreakpoint } from "../constants"

import { Header } from "./Global/Header";
import ProductsProvider from "../state/ProductsProvider";
import CartProvider from "../state/CartProvider";
import { Footer } from "./Global/Footer";

interface LayoutProps {
  children: any;
  backgroundColour: string;
  pathname: string;
}

const Main = styled.section`
  width: min(var(--page-max-width), 95%);
  flex: 1;
`;

export const PageWrapper = styled.main<{ backgroundColour: string }>`
  padding-top: var(--small-component-spacing);
  padding-left: var(--small-component-spacing);
  padding-right: var(--small-component-spacing);
  padding-bottom: var(--x-small-component-spacing);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ backgroundColour }) =>
    `${backgroundColour || `var(--faded-blue)`}`};
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding: var(--small-component-spacing), var(--small-text-spacing);
  }
`;

export const IntroPageWrapper = styled(PageWrapper)`
  justify-content: center;
`;

const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundColour,
  pathname,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      clearTimeout((window as any).introTimer);
    }
  }, [pathname]);
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
