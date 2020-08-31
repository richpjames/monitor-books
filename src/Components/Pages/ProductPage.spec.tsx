import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductPage from "./ProductPage";

describe("ProductPage component", () => {
  it("should render title", () => {
    const { queryByText } = render(
      <ProductPage
        addToCart={jest.fn()}
        title="test product"
        leftDescription="testing is fun"
        rightDescription="and good"
        author="the test"
        photos={[0, 2]}
        id="id"
        cartQuantityById={{ id: 0 }}
        inventoryQuantity={5}
      />
    );
    expect(queryByText("test product")).toBeInTheDocument();
  });
  it("should render left description", () => {
    const { queryByText } = render(
      <ProductPage
        addToCart={jest.fn()}
        title="test product"
        leftDescription="testing is fun"
        rightDescription="and good"
        author="the test"
        photos={[0, 2]}
        id="id"
        cartQuantityById={{ id: 0 }}
        inventoryQuantity={5}
      />
    );
    expect(queryByText("testing is fun")).toBeInTheDocument();
  });

  it("should render right description", () => {
    const { queryByText } = render(
      <ProductPage
        addToCart={jest.fn()}
        title="test product"
        leftDescription="testing is fun"
        rightDescription="and good"
        author="the test"
        photos={[0, 2]}
        id="id"
        cartQuantityById={{ id: 0 }}
        inventoryQuantity={5}
      />
    );
    expect(queryByText("and good")).toBeInTheDocument();
  });

  it("should render author", () => {
    const { queryByText } = render(
      <ProductPage
        addToCart={jest.fn()}
        title="test product"
        leftDescription="testing is fun"
        rightDescription="and good"
        author="the test author"
        photos={[0, 2]}
        id="id"
        cartQuantityById={{ id: 0 }}
        inventoryQuantity={5}
      />
    );
    expect(queryByText("the test author")).toBeInTheDocument();
  });

  test("calls onClick handler  when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ProductPage
        addToCart={onClick}
        title="test product"
        leftDescription="testing is fun"
        rightDescription="and good"
        author="the test author"
        photos={[0, 2]}
        id="id"
        cartQuantityById={{ id: 0 }}
        inventoryQuantity={5}
      />
    );
    const button = getByText("Add to basket");
    expect(button).toBeInTheDocument();

    expect(onClick).not.toHaveBeenCalled();

    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("but is disabled when 0 inventory", () => {
    const onClick = () => {
      jest.fn();
    };
    const { getByText } = render(
      <ProductPage
        addToCart={onClick}
        title="test product"
        leftDescription="testing is fun"
        rightDescription="and good"
        author="the test author"
        photos={[0, 2]}
        id="id"
        cartQuantityById={{ id: 0 }}
        inventoryQuantity={0}
      />
    );
    const button = getByText("Out of stock");
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();
  });
});
