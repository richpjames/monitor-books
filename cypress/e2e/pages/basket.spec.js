const sku = "price_1JrA8nJs9ciiqN7ONSoey4is";
const siblingsPrice = 12;
const defaultShippingPrice = 2.5;

describe("Basket", () => {
  beforeEach(() =>
    cy.visit("/basket", {
      onBeforeLoad: (win) => {
        win.localStorage.setItem(
          "basket",
          JSON.stringify([["price_1Of9a3Js9ciiqN7OIoARpxNk", 1]])
        );
      },
    })
  );

  it("shows empty basket message", () => {
    cy.visit("/basket", {
      onBeforeLoad: (win) => {
        win.localStorage.setItem("basket", JSON.stringify([]));
      },
    });
    cy.get("#empty-basket-message");
  });

  it("correct items are shown in basket", () => {
    cy.get("#siblings-basket-item")
      .contains("Jay Bernard, Mary Jean Chan, Will Harris, Nisha Ramayya")
      .get("#siblings-subtitle")
      .contains("Siblings")
      .get("#siblings-quantity-panel")
      .get("#siblings-price")
      .contains(`£${siblingsPrice}`)
      .contains("1")
      .percySnapshot();
  });

  it("increasing quantity of a book increases the price accordingly", () => {
    cy.get("#basket-total")
      .contains(`£${siblingsPrice + defaultShippingPrice}`)
      .get("#siblings-increase-quantity-button")
      .click()
      .get("#basket-total")
      .contains(`£${siblingsPrice * 2 + defaultShippingPrice}`)
      .percySnapshot();
  });

  it("decreasing quantity of a book increases the price accordingly", () => {
    cy.get("#basket-total")
      .contains(`£${siblingsPrice + defaultShippingPrice}`)
      .get("#siblings-decrease-quantity-button")
      .click()
      .get("#basket-total")
      .contains(`£${defaultShippingPrice}`)
      .percySnapshot();
  });

  it("test that when quantity is 0 decreasing is disabled and quantity is 0", () => {
    cy.get("#basket-total")
      .contains(`£${siblingsPrice + defaultShippingPrice}`)
      .get("#siblings-decrease-quantity-button")
      .click()
      .get("#basket-total")
      .contains(`£${defaultShippingPrice}`)
      .get("#siblings-quantity")
      .eq("0")
      .get("#siblings-decrease-quantity-button")
      .should("be.disabled");
  });

  it("changes to the postal region are show in the shipping price and basket total", () => {
    const europeanShippingPrice = 4.5;
    const restOfTheWorldShippingPrice = 6.5;

    cy.get("#shipping-selector")
      .select("Europe")
      .get("#shipping-cost")
      .contains(`£${europeanShippingPrice}0`)
      .get("#basket-total")
      .contains(`£${siblingsPrice + europeanShippingPrice}`)
      .get("#shipping-selector")
      .select("Rest Of The World")
      .get("#shipping-cost")
      .contains(`£${restOfTheWorldShippingPrice}0`)
      .get("#basket-total")
      .contains(`£${siblingsPrice + restOfTheWorldShippingPrice}`)
      .get("#shipping-selector")
      .select("UK")
      .get("#shipping-cost")
      .contains(`£${defaultShippingPrice}0`)
      .get("#basket-total")
      .contains(`£${siblingsPrice + defaultShippingPrice}`)
      .percySnapshot();
  });
});
