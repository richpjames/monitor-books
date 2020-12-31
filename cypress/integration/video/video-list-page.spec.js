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
  it("shows all the books", () => {
    cy.get("#murmur-episode-two-creator-0")
      .contains("Nisha Ramayya")
      .get("#murmur-episode-two-creator-1")
      .contains("Will Harris")
      .get("#murmur-episode-two-creator-2")
      .contains("Sophie Collins")
      .get('[alt="thumbnail image for Murmur Reading Series #2 video"]')
      .should("be.visible");

    cy.get("#murmur-episode-one-creator-0")
      .contains("Alan Fielden")
      .get("#murmur-episode-one-creator-1")
      .contains("Aurelia Guo")
      .get("#murmur-episode-one-creator-2")
      .contains("Mónica de la Torre")
      .get('[alt="thumbnail image for Murmur Reading Series #1 video"]')
      .should("be.visible");
  });
  it("clicking on a book takes the user to the correct page", () => {
    cy.get("#murmur-episode-two-video-list-container")
      .click()
      .url()
      .should(
        "eq",
        "http://localhost:8888/murmur-reading-series/murmur-episode-two"
      );

    cy.visit("/murmur-reading-series")
      .get("#murmur-episode-one-video-list-container")
      .click()
      .url()
      .should(
        "eq",
        "http://localhost:8888/murmur-reading-series/murmur-episode-one"
      );
  });
});
