import React from "react";

import { PageTitle, PageTitleBold, TitleWrapper } from "./Titles";

interface Props {
  title: string;
  subtitle?: string;
}

export function ProductTitle(props: Props) {
  const { title, subtitle } = props;
  return (
    <TitleWrapper>
      <PageTitleBold>{subtitle}</PageTitleBold>
      <br />
      <PageTitle>{title}</PageTitle>
    </TitleWrapper>
  );
}
