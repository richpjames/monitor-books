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

      {bold ? (
        <AmericaTitleBold>{subtitle}</AmericaTitleBold>
      ) : (
        <CalsonTitle>{subtitle}</CalsonTitle>
      )}
    </TitleWrapper>
  );
}

export default BookTitle;
