import React from "react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import Layout from "../Components/layout";

const Success: React.FC<PageProps> = () => {
  const { allSanityBackgroundColours } = useStaticQuery(graphql`
    query {
      allSanityBackgroundColours {
        nodes {
          basket
        }
      }
    }
  `);

  const { basket: basketBackgroundColour } = allSanityBackgroundColours.nodes;

  return (
    <Layout backgroundColour={basketBackgroundColour}>
      <h1>Order Successful</h1>
      <p>
        Everything went through ok.
        <br /> Thanks for your order. <br /> You will receive an email with
        details. <br /> For enquiries editor@monitorbooks.co.uk
      </p>
    </Layout>
  );
};
export default Success;
