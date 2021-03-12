import React from "react";

interface Props {
  title: string;
  subtitle: string[];
}

export function VideoTitle(props: Props) {
  const { title, subtitle } = props;
  return (
    <>
      <h1>{title} </h1>

      {subtitle.map((creator, i) => {
        return (
          <h2 key={i}>{`${creator}${i < subtitle.length - 1 ? ", " : ""}`}</h2>
        );
      })}
    </>
  );
}
