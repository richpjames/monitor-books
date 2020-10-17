import { addToBasket } from "../../../src/actions";

const dispatch = (action) =>
  cy.window().its("store").invoke("dispatch", action);

describe("Basket", () => {
  beforeEach(() =>
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/basket", {
        onBeforeLoad: (win) => {
          win.initialState = initialisedState;
        },
      })
    )
  );

  // test correct items are shown in basket
  xit("test correct items are shown in basket", () => {
    cy.fixture("initialisedState").then((initialisedState) => {
      dispatch(addToBasket("9T65B28LLM2MC"));
      cy.window()
        .its("store")
        .invoke("getState")
        .should("deep.equal", {
          ...initialisedState,
          cart: {
            addedIds: ["9T65B28LLM2MC"],
            quantityById: {
              "9T65B28LLM2MC": 1,
            },
            shipping: {
              region: "UK",
              priceId: "price_1HMwTgJs9ciiqN7OnYGR5rOp",
              price: 2.5,
            },
          },
        });
    });
  });
});

//test increasing quantity of a book increases the price accordingly

//test decreasing quantity of a book decreases the price accordingly

//test descreasing/increasing quantity of different book

//test that quantity of book doesn't go below 0

//test removing a book removes it from the basket

//test changing the postal region and check the price reflects this

//test that with no items in the cart the options to buy/postal charges are removed

//test checkout button takes user to stripe
// });
