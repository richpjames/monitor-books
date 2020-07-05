import React from "react";
import { render } from "@testing-library/react";

import Title from "./Title";

describe("Title", () => {
  test("allows text to be passed through title", () => {
    const { getByText } = render(
      <Title title={"Hello World"} subtitle={""} bold></Title>
    );
    getByText(/Hello World/);
  });
  test("allows text to be passed through subtitle", () => {
    const { getByText } = render(
      <Title title={""} subtitle={"Hello Subworld"}></Title>
    );
    getByText(/Hello Subworld/);
  });
  test("shows both title and subtitle", () => {
    const { getByText } = render(
      <Title title={"Hello world"} subtitle={"hello subworld"} bold></Title>
    );
    getByText(/Hello world/);
    getByText(/hello subworld/);
  });
});
