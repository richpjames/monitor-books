import { addToBasket, decrementInCart } from "../../../src/actions";
import { saveState } from "../../../src/sessionStorage";

const dispatch = (action) =>
  cy.window().its("store").invoke("dispatch", action);

describe("Basket", () => {
  beforeEach(() =>
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/basket", {
        onBeforeLoad: (win) => {
          saveState(initialisedState);
        },
      })
    )
  );

  it("correct items are shown in basket", () => {
    dispatch(addToBasket("9T65B28LLM2MC"));
    cy.get("#anthology-title")
      .contains("Various")
      .get("#anthology-subtitle")
      .contains("MURMUR ANTHOLOGY 1")
      .get("#anthology-quantity-panel")
      .contains("1");
  });

  it("shows empty basket message", () => {
    cy.get("#empty-basket-message").contains("Your basket is empty");
  });

  it("increasing quantity of a book increases the price accordingly", () => {
    dispatch(addToBasket("9T65B28LLM2MC"));
    cy.get("#basket-total")
      .contains("£12")
      .get("#anthology-increase-quantity-button")
      .click()
      .get("#basket-total")
      .contains("£22");
  });

  it("decreasing quantity of a book increases the price accordingly", () => {
    dispatch(addToBasket("9T65B28LLM2MC"));
    cy.get("#basket-total")
      .contains("£12")
      .get("#anthology-decrease-quantity-button")
      .click()
      .get("#basket-total")
      .contains("£2.00");
  });

  it("test descreasing/increasing quantity of different book increases the basket total accordingly", () => {
    dispatch(addToBasket("9T65B28LLM2MD"));
    dispatch(addToBasket("9T65B28LLM2MC"));
    cy.get("#basket-total")
      .contains("£22")
      .get("#propositions-decrease-quantity-button")
      .click()
      .get("#basket-total")
      .contains("£12")
      .get("#anthology-increase-quantity-button")
      .click()
      .get("#basket-total")
      .contains("£22")
      .get("#propositions-increase-quantity-button")
      .click()
      .click()
      .get("#basket-total")
      .contains("£42");
  });

  it("test that when quantity is 0 decreasing is disabled and quantity is 0", () => {
    dispatch(addToBasket("9T65B28LLM2MC"));
    cy.get("#basket-total")
      .contains("£12")
      .get("#anthology-decrease-quantity-button")
      .click()
      .get("#basket-total")
      .contains("£2.00")
      .get("#anthology-quantity")
      .eq("0")
      .get("#anthology-decrease-quantity-button")
      .should("be.disabled");
  });
  it("test removing a book removes it from the basket", () => {
    dispatch(addToBasket("9T65B28LLM2MD"));
    cy.get("#propositions-remove-button")
      .click()
      .get("#empty-basket-message")
      .contains("Your basket is empty");
  });

  it("changes to the postal region are show in the shipping price and basket total", () => {
    dispatch(addToBasket("9T65B28LLM2MC"));

    cy.get("#shipping-selector")
      .select("Europe")
      .get("#shipping-cost")
      .contains("£4")
      .get("#basket-total")
      .contains("£14")
      .get("#shipping-selector")
      .select("Rest Of The World")
      .get("#shipping-cost")
      .contains("£5")
      .get("#basket-total")
      .contains("£15")
      .get("#shipping-selector")
      .select("UK")
      .get("#shipping-cost")
      .contains("£2.50")
      .get("#basket-total")
      .contains("£12.50");
  });

  // it.only("test checkout button takes user to stripe", () => {
  //   dispatch(addToBasket("9T65B28LLM2MC"));
  //   cy.get("#checkout-button").click().wait(5000).url();
  // });
});
