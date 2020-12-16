import { introTimerMilliseconds } from "../../../src/constants";
import { saveState } from "../../../src/sessionStorage";

const testSlideshowShows = () =>
  cy
    .get('[alt="Monitor Books Logo"]')
    .wait(introTimerMilliseconds)
    .url()
    .should("includes", "/books/propositions")
    .get("h1")
    .contains("PROPOSITIONS");

describe("Slideshow", () => {
  beforeEach(() =>
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/", {
        onBeforeLoad: (win) => {
          saveState(initialisedState);
        },
      })
    )
  );
  it("When a user navigates to the root for the first time the slideshow should show", () => {
    testSlideshowShows();
  });
  it("When a user naviates to any url other than root the slideshow should not show", () => {
    cy.visit(`http://localhost:8888/books/propositions`)
      .get("h1")
      .contains("PROPOSITIONS");
  });
  it("When a user navigates to the root for the second time in a session the slideshow should not show", () => {
    testSlideshowShows();
    cy.visit("http://localhost:8888").get("h1").contains("PROPOSITIONS");
  });
  it("When a user navigates to the root for the first time the slideshow should show but when a user goes back it shouldn't show", () => {
    testSlideshowShows();
    cy.go("back").wait(100).get("h1").contains("PROPOSITIONS");
  });
});
