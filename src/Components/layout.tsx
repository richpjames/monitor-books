import React, { useEffect } from "react";

import "../../app.css";
import "../../system.css";

import { Header } from "./Global/Header";
import ProductsProvider from "../state/ProductsProvider";
import CartProvider from "../state/CartProvider";
import { PageWrapper } from "../Components/Common";
interface LayoutProps {
  children: any;
  backgroundColour: string;
  pathname: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundColour,
  pathname,
}) => {
  useEffect(() => {
    if (window) {
      clearTimeout((window as any).introTimer);
      console.log("timeoutcleared");
    }
  }, [pathname]);
  return (
    <PageWrapper backgroundColour={backgroundColour}>
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
