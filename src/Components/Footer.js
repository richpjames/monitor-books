import React from "react";
import styled from "styled-components";

const FooterWrap = styled.section`
  border-top: 1px black solid;
  margin-bottom: 5%;
  margin-top: 5%;
  margin-right: auto;
  margin-left:auto;
  width: 66.9%;
`;

const Footer = () => {
  return <FooterWrap className="FooterWrap"></FooterWrap>;
};

export default Footer;
