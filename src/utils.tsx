import React from "react";

export const paragraphSplitter = (input: string) => {
  return input.split("\n").map((i, key) => {
    return <p key={key}>{i}</p>;
  });
};
