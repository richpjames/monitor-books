import { addToBasket } from "../../../src/actions";
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

  it(" correct items are shown in basket", () => {
    dispatch(addToBasket("9T65B28LLM2MC"));
    cy.get("#various-title")
      .contains("Various")
      .get("#various-subtitle")
      .contains("MURMUR ANTHOLOGY 1")
      .get("#various-quantity-panel")
      .contains("1");
  });

  it("shows empty basket message", () => {
    cy.get("#empty-basket-message").contains("Your basket is empty");
  });

  //"displays all items in basket page"

  it("increasing quantity of a book increases the price accordingly", () => {
    dispatch(addToBasket("9T65B28LLM2MC"));
    cy.get();
  });

  //test decreasing quantity of a book decreases the price accordingly

  //test descreasing/increasing quantity of different book

  //test that quantity of book doesn't go below 0

  //test removing a book removes it from the basket

  it("changing the postal region and check the price reflects this", () => {
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
});

//test that with no items in the cart the options to buy/postal charges are removed

//test checkout button takes user to stripe
// });
