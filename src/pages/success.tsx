import React from "react";
import { PageProps } from "gatsby";
import Layout from "../Components/layout";
import { useSetBackground } from "../hooks/useSetBackground";

const Success: React.FC<PageProps> = () => {
  useSetBackground("basket_background");
  return (
    <Layout>
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
