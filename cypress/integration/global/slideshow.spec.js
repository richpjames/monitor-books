import { introTimerMilliseconds } from "../../../src/constants";

const testSlideshowShows = () =>
  cy
    .visit("http://localhost:8888")
    .get("h1", { timeout: 20 })
    .contains("Slideshow")
    .wait(introTimerMilliseconds)
    .url()
    .should("includes", "/books/propositions")
    .get("h1")
    .contains("PROPOSITIONS");

describe("Slideshow", () => {
  it("When a user navigates to the root for the first time the slideshow should show", () => {
    testSlideshowShows();
  });
  it("When a user naviates to any url other than root the slideshow should not show", () => {
    cy.visit(`http://localhost:8888/books/propositions`)
      .get("h1")
      .contains("PROPOSITIONS");
  });
});
