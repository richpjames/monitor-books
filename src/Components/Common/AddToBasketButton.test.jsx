import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddToBasketButton } from "./AddToBasketButton";

describe("addToBasket", () => {
  test("allows custom text", () => {
    const { queryByText } = render(
      <AddToBasketButton onClick={() => {}}>Click me!</AddToBasketButton>
    );
    expect(queryByText("Click me!")).toBeInTheDocument();
  });

  test("calls onClick handler (if provided) when clicked", () => {
    const onClick = jest.fn();
    const { queryByText } = render(
      <AddToBasketButton onClick={onClick}>Click me!</AddToBasketButton>
    );
    const button = queryByText("Click me!");

    expect(onClick).not.toHaveBeenCalled();

    userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test("does not call the onClick handler when set to disabled", () => {
    const onClick = jest.fn();
    const { queryByText } = render(
      <AddToBasketButton onClick={onClick} disabled>
        Click me!
      </AddToBasketButton>
    );
    const button = queryByText("Click me!");

    userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
