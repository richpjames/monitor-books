import { saveState } from "../../../src/sessionStorage";

describe("Product List Page", () => {
  beforeEach(() =>
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/books/", {
        onBeforeLoad: (win) => {
          saveState(initialisedState);
        },
      })
    )
  );

  it("shows all the books", () => {
    cy.get();
  });
  //check books are displayed
  //test links take user to the appropriate pages
});
