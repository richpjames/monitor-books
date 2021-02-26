import React from "react";
import { Header } from "./Global/Header";
import { PageWrapper } from "./Common";
import "../../App.css";

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      {children}
    </PageWrapper>
  );
};

export default Layout;
