import React from "react";
import { Header } from "./Global/Header";
import { useStaticQuery, graphql } from "gatsby";
import { PageWrapper } from "./Common";
import { receiveProducts } from "../state/actions/index";
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
