import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IndividualPhoto from "./IndividualPhoto";

describe("IndividualPhoto", () => {
  it("renders an image with the given alt text", () => {
    const src = "http://myimage.com/x";
    const altText = "Alt text";

    const { getByAltText } = render(
      <IndividualPhoto
        altText={altText}
        src={src}
        index={1}
        openLightbox={() => {}}
      />
    );

    expect(getByAltText(altText)).toHaveAttribute("src", src);
  });

  test("calls onClick handler when clicked", () => {
    const onClick = jest.fn();
    const { getByAltText } = render(
      <IndividualPhoto
        altText={"a photo"}
        src={""}
        index={1}
        openLightbox={onClick}
      />
    );
    const button = getByAltText("a photo");

    expect(onClick).not.toHaveBeenCalled();

    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
