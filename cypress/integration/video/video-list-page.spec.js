import { saveState } from "../../../src/sessionStorage";

describe("Video List Page", () => {
  beforeEach(() =>
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/murmur-reading-series/", {
        onBeforeLoad: (_) => {
          saveState(initialisedState);
        },
      })
    )
  );

  it("shows title", () => {
    cy.get("h1").contains("Murmur Reading Series");
  });
  it("shows all the videos", () => {
    cy.get("#episode-two-creator-0")
      .contains("Nisha Ramayya")
      .get("#episode-two-creator-1")
      .contains("Will Harris")
      .get("#episode-two-creator-2")
      .contains("Sophie Collins")
      .get('[alt="thumbnail image for Murmur Reading Series #2 video"]')
      .should("be.visible");

    cy.get("#episode-one-creator-0")
      .contains("Alan Fielden")
      .get("#episode-one-creator-1")
      .contains("Aurelia Guo")
      .get("#episode-one-creator-2")
      .contains("Mónica De La Torre")
      .get('[alt="thumbnail image for Murmur Reading Series #1 video"]')
      .should("be.visible");
  });
  it("clicking on a book takes the user to the correct page", () => {
    cy.get("#episode-two-video-list-container")
      .click()
      .url()
      .should("eq", "http://localhost:8888/murmur-reading-series/episode-two");

    cy.visit("/murmur-reading-series")
      .get("#episode-one-video-list-container")
      .click()
      .url()
      .should("eq", "http://localhost:8888/murmur-reading-series/episode-one");
  });
});
