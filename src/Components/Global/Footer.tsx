import React from "react";
import styled from "styled-components/macro";
import { text } from "../../constants";

const FooterWrap = styled.section`
  border-top: 1px black ${text};
  margin-bottom: 5%;
  margin-top: 5%;
`;

const Footer = () => {
  return <FooterWrap className="FooterWrap" />;
};

export default Footer;
