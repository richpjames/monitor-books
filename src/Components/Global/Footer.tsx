import React from "react";
import styled from "styled-components/macro";

const FooterWrap = styled.section`
  border-top: 1px black var(--main-border-colour);
  margin-bottom: 5%;
  margin-top: 5%;
`;

const Footer = () => {
  return <FooterWrap className="FooterWrap" />;
};

export default Footer;
