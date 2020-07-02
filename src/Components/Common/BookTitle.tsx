import React from "react";

import { CalsonTitle, AmericaTitle, TitleWrapper } from "./Titles";

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
