import { addToBasket } from "../../../src/actions";
import { saveState } from "../../../src/sessionStorage";

const dispatch = (action) =>
  cy.window().its("store").invoke("dispatch", action);

describe("Header", () => {
  beforeEach(() => {
    cy.visit("/propositions");
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/basket", {
        onBeforeLoad: (_) => {
          saveState(initialisedState);
        },
      })
    );
  });

  it("clicking logo item takes the user to the about page", () => {
    cy.get(".logo-container").click();
    cy.url().should("include", "/about");
  });
  it("clicking Books Nav item takes the user to the books page", () => {
    cy.contains("Books").click();
    cy.url().should("include", "/books");
  });

  it("clicking Videos Nav item takes the user to the video page", () => {
    cy.contains("Murmur Reading Series").click();
    cy.url().should("include", "/murmur-reading-series");
  });

  it("clicking Basket Nav item takes the user to the basket page", () => {
    cy.get(".basket").click();
    cy.url().should("include", "/basket");
  });

  it("adding item to basket increases the item count in the basket icon", () => {
    cy.get("#header-basket-items").contains("0");
    dispatch(addToBasket("price_1HdckTJs9ciiqN7O218PIefo"));
    cy.get("#header-basket-items").contains("1");
  });
});
