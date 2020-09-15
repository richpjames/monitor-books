describe("Slideshow", () => {
  it("check slideshow duration", () => {
    cy.visit("http://localhost:8888");
    cy.contains("Propositions");

    cy.contains("monitor");
    cy.url().should("include", "/propositions");
    cy.get("h1").contains("Amy");
  });
});

describe("Product - Add to basket", () => {
  it("on propositions page", () =>
    cy.visit("http://localhost:8888/propositions"));

  it("Clicking on Add to basket button adds item to basket", () =>
    cy.get(".product-button").click());
  it("Clicking add to basket button for a second time takes customer to basket", () => {
    cy.get(".product-button").click();
    cy.url().should("include", "/basket");
    cy.get("h1").contains("Basket");
  });
});
describe("Basket", () => {
  it("on basket page", () => cy.visit("http://localhost:8888/basket"));
  it("displays the correct quantity", () => {
    cy.get(".item-quantity-number").contains("1");
  });
  it("displays the correct price", () => {
    cy.get(".shipping-cost").contains("2.50");
    cy.get(".basket-total").contains("10.50");
  });
});
