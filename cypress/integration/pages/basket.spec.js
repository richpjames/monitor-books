const sku = "price_1Of9a3Js9ciiqN7OIoARpxNk";

describe("Basket", () => {
  beforeEach(() =>
    cy
      .fixture("initialisedState")
      .then((initialisedState) => cy.visit("/basket"))
  );

  it("shows empty basket message", () => {
    cy.get("#empty-basket-message");
  });

  it("correct items are shown in basket", () => {
    cy.window().its("ctx").invoke("add", "sku");
    cy.get("#anthology-title")
      .contains("Various")
      .get("#anthology-subtitle")
      .contains("Murmur Anthology #1")
      .get("#anthology-quantity-panel")
      .get("#anthology-price")
      .contains("£10")
      .contains("1")
      .percySnapshot();
  });

  it("increasing quantity of a book increases the price accordingly", () => {
    cy.window().its("ctx").invoke("add", "sku");
    cy.get("#basket-total")
      .contains("£12")
      .get("#anthology-increase-quantity-button")
      .click()
      .get("#basket-total")
      .contains("£22")
      .percySnapshot();
  });

  it("decreasing quantity of a book increases the price accordingly", () => {
    cy.window().its("ctx").invoke("add", "sku");
    cy.get("#basket-total")
      .contains("£12")
      .get("#anthology-decrease-quantity-button")
      .click()
      .get("#basket-total")
      .contains("£2.50")
      .percySnapshot();
  });

  it("test that when quantity is 0 decreasing is disabled and quantity is 0", () => {
    cy.window().its("ctx").invoke("add", "sku");
    cy.get("#basket-total")
      .contains("£12")
      .get("#anthology-decrease-quantity-button")
      .click()
      .get("#basket-total")
      .contains("£2.50")
      .get("#anthology-quantity")
      .eq("0")
      .get("#anthology-decrease-quantity-button")
      .should("be.disabled");
  });

  it("changes to the postal region are show in the shipping price and basket total", () => {
    cy.window().its("ctx").invoke("add", "sku");
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
      .contains("£12.50")
      .percySnapshot();
  });
});
