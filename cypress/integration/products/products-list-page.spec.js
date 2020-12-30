import { saveState } from "../../../src/sessionStorage";

describe("Product List Page", () => {
  beforeEach(() =>
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/books/", {
        onBeforeLoad: (_) => {
          saveState(initialisedState);
        },
      })
    )
  );

  it("shows all the books", () => {
    cy.get("#propositions-title")
      .contains("PROPOSITIONS")
      .get("#propositions-subtitle")
      .contains("Amy McCauley")
      .get('[alt="a photo of the book propositions by Amy McCauley"]')
      .should("be.visible")
      .get("#anthology-title")
      .contains("MURMUR ANTHOLOGY")
      .get("#anthology-subtitle")
      .contains("Various")
      .get('[alt="a photo of the book murmur anthology 1 by Various"]')
      .should("be.visible");
  });
  it("clicking on a book takes the user to the correct page", () => {
    cy.get("#propositions-container")
      .click()
      .url()
      .should("eq", "http://localhost:8888/books/propositions");
  });
});
