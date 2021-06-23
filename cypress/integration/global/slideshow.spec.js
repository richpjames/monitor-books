import { introTimerMilliseconds } from "../../../src/constants";

const testSlideshowShows = () =>
  cy
    .visit(Cypress.config().baseUrl)
    .wait(introTimerMilliseconds)
    .url()
    .should("includes", "/books/propositions")
    .get("h1")
    .contains("Propositions");

describe("Slideshow", () => {
  it("When a user navigates to the root for the first time the slideshow should show", () => {
    testSlideshowShows();
  });
  it("When a user naviates to any url other than root the slideshow should not show", () => {
    cy.visit(`${Cypress.config().baseUrl}/books/propositions`)
      .get("h1")
      .contains("Propositions");
  });
});
