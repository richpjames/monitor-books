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

      <h2>
        {subtitle.map((creator, i) => {
          return <>{`${creator}${i < subtitle.length - 1 ? ", " : ""}`}</>;
        })}
      </h2>
    </>
  );
}
