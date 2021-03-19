import React, { useEffect } from "react";
import styled from "styled-components/macro";

import "../css/app.css";
import "../css/system.css";

import { Header } from "./Global/Header";
import ProductsProvider from "../state/ProductsProvider";
import CartProvider from "../state/CartProvider";
import { PageWrapper } from "../Components/Common";

interface LayoutProps {
  children: any;
  backgroundColour: string;
  pathname: string;
}

const Main = styled.main`
  max-width: var(--page-max-width);
`;

const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundColour,
  pathname,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      clearTimeout((window as any).introTimer);
      console.log("timeoutcleared");
    }
  }, [pathname]);
  return (
    <PageWrapper backgroundColour={backgroundColour}>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Main>{children}</Main>
        </CartProvider>
      </ProductsProvider>
    </PageWrapper>
  );
};

export default Layout;
