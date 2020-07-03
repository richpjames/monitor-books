import React from "react";

import {
  CalsonTitle,
  AmericaTitle,
  AmericaTitleBold,
  TitleWrapper,
} from "./Titles";

interface IProps {
  title: string;
  subtitle: string;
  bold?: boolean;
}

function BookTitle(props: IProps) {
  const { title, subtitle, bold } = props;
  return (
    <TitleWrapper>
      <AmericaTitle>{title} </AmericaTitle>
      <CalsonTitle>{subtitle}</CalsonTitle>
      {bold && <AmericaTitleBold>{subtitle}</AmericaTitleBold>}
    </TitleWrapper>
  );
}

export default BookTitle;
