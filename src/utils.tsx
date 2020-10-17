import React from "react";

export const paragraphSplitter = (input = "") =>
  input.split("\n").map((i, key) => {
    return <p key={key}>{i}</p>;
  });

export const twoDecimalPlaces = (number: number) =>
  (Math.round(number * 100) / 100).toFixed(2);
