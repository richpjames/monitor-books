import React from "react";

import { PageSubtitle, PageTitle, PageTitleBold, TitleWrapper } from "./Titles";

interface IProps {
  title: string;
  subtitle?: string;
  bold?: boolean;
}

export function Title(props: IProps) {
  const { title, subtitle, bold } = props;
  return (
    <TitleWrapper>
      <PageTitle>{title} </PageTitle>
      {bold ? (
        <PageTitleBold>{subtitle}</PageTitleBold>
      ) : (
        <PageSubtitle>{subtitle}</PageSubtitle>
      )}
    </TitleWrapper>
  );
}
