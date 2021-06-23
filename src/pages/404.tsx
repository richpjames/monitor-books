import React from "react";
import styled from "styled-components/macro";
import { PageProps } from "gatsby";

import Layout from "../Components/layout";
import SEO from "../Components/seo";
import { useSetBackground } from "../hooks/useSetBackground";

const ContentWrapper = styled.div`
  margin: 0 auto;
  > h1 {
    padding-bottom: var(--spacing-3);
  }
`;

const NotFound: React.FC<PageProps> = ({ location }) => {
  useSetBackground("product-background-colour");
  
  return (
    <Layout pathname={location.pathname}>
      <SEO
        title="404 Page"
        description="Sorry, we couldn't find the page you're looking for"
      />
      <ContentWrapper>
        <h1>Page Not Found</h1>
        <p>
          We couldn't find that page. <br />
          Please select an option from the header
        </p>
      </ContentWrapper>
    </Layout>
  );
};
export default NotFound;
