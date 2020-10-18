import React from "react";

import { PageSubtitle, PageTitle, PageTitleBold, TitleWrapper } from "./Titles";

interface Props {
  title: string;
  subtitle?: string;
  bold?: boolean;
}

export function Title(props: Props) {
  const { title, subtitle, bold } = props;
  return (
    <TitleWrapper>
      {!bold && <PageTitle>{title} </PageTitle>}
      {bold ? (
        <>
          {" "}
          <PageTitleBold>{subtitle}</PageTitleBold>
          <br></br>
        </>
      ) : (
        <PageSubtitle>{subtitle}</PageSubtitle>
      )}
      {bold && <PageTitle>{title}</PageTitle>}
    </TitleWrapper>
  );
}
