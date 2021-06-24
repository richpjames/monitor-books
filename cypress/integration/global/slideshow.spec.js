import { introTimerMilliseconds } from "../../../src/constants";

const testSlideshowShows = () =>
  cy
    .visit(Cypress.config().baseUrl)
    .wait(introTimerMilliseconds)
    .url()
    .should("includes", "/books/");

describe("Slideshow", () => {
  it("When a user navigates to the root for the first time the slideshow should show", () => {
    testSlideshowShows();
  });
});
