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

      {subtitle.map((creator, i) => {
        return (
          <PageSubtitle key={i}>{`${creator}${
            i < subtitle.length - 1 ? ", " : ""
          }`}</PageSubtitle>
        );
      })}
    </TitleWrapper>
  );
}
