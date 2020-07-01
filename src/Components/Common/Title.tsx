import React from "react";
import styled from "styled-components/macro";

import { CalsonTitle, AmericaTitle } from "./Common";

const TitleWrapper = styled.div`
  border-bottom: 1px solid black;
`;

interface IProps {
  title: string;
  subtitle: string;
  split?: boolean;
}

function Title(props: IProps) {
  const { title, subtitle } = props;
  return (
    <TitleWrapper>
      <AmericaTitle>{title} </AmericaTitle>
      <CalsonTitle>{subtitle}</CalsonTitle>
    </TitleWrapper>
  );
}

export default Title;
