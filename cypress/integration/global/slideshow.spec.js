import { introTimerMilliseconds } from "../../../src/constants";

const testSlideshowShows = () =>
  cy
    .visit(Cypress.config().baseUrl)
    .wait(introTimerMilliseconds)
    .url()
    .should("includes", "/books");

describe("Slideshow", () => {
  it("When a user navigates to the root for the first time the slideshow should show", () => {
    testSlideshowShows().percySnapshot();
  });
  it("When a user navigates to the books page after seeing the slideshow the slideshow shouldn't show again", () => {
    testSlideshowShows()
      .visit(`${Cypress.config().baseUrl}/books`)
      .get("#propositions-container");
  });
});
