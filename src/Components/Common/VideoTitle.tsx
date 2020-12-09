import React from "react";

import { PageSubtitle, PageTitle, TitleWrapper } from "./Titles";

interface Props {
  title: string;
  subtitle: [string];
}

export function VideoTitle(props: Props) {
  const { title, subtitle } = props;
  return (
    <TitleWrapper>
      <PageTitle>{title} </PageTitle>
      {subtitle.map((creator) => (
        <PageSubtitle>{creator}</PageSubtitle>
      ))}
    </TitleWrapper>
  );
}
