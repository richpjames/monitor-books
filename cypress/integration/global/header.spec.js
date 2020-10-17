import { addToBasket } from "../../../src/actions";

const dispatch = (action) =>
  cy.window().its("store").invoke("dispatch", action);

describe("Header", () => {
  beforeEach(() => {
    cy.visit("/propositions");
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/basket", {
        onBeforeLoad: (win) => {
          win.initialState = initialisedState;
        },
      })
    );
    it("clicking Books Nav item takes the user to the books page", () => {
      cy.contains("Books").click();
      cy.url().should("include", "/books");
    });

    it("clicking Videos Nav item takes the user to the video page", () => {
      cy.contains("Murmur Reading Series").click();
      cy.url().should("include", "/murmur-episode-one");
    });

    it("clicking Basket Nav item takes the user to the basket page", () => {
      cy.get(".basket").click();
      cy.url().should("include", "/basket");
    });

    it("adding item to basket increases the item count in the basket icon", () => {
      cy.fixture("initialisedState").then((initialisedState) =>
        cy.visit("/basket", {
          onBeforeLoad: (win) => {
            win.initialState = initialisedState;
          },
        })
      );
      dispatch(addToBasket("9T65B28LLM2MC"));
      cy.get(".header-basket-items").contains("1");
    });
    //TODO test that when item is added to the basket the number in the basket increases
  });
});
