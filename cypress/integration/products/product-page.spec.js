import { saveState } from "../../../src/sessionStorage";

describe("Product Page", () => {
  beforeEach(() =>
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/books/propositions", {
        onBeforeLoad: (win) => {
          saveState(initialisedState);
        },
      })
    )
  );
  it("test correct information is shown for product", () => {
    cy.url()
      .should("include", "/propositions")
      .get("h1")
      .contains("Amy")
      .get("h1")
      .contains("PROPOSITIONS")
      .get(".left-section")
      .contains(
        "A fragmentary treatise on desire and its consequences, Propositions is a playful examination of how we constitute and disassemble the self in language"
      )
      .get(".right-section")
      .contains("Designed by John Newton and Rory Cook");
  });
  it("Clicking on Add to basket button adds item to basket", () => {
    return cy
      .get(".add-to-basket")
      .click()
      .get("#header-basket-items")
      .contains("1");
  });

  it("Clicking add to basket button for a second time takes customer to basket", () => {
    cy.get(".add-to-basket")
      .click()
      .click()
      .url()
      .should("include", "/basket")
      .get("#basket-title")
      .contains("Basket");
  });

  //test images
});
