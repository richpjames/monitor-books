describe("Product Page", () => {
  beforeEach(() => cy.visit("http://localhost:8888/books/propositions"));

  it("test title is shown", () => {
    cy.url().should("include", "/propositions");
    cy.get("h1").contains("Amy");
  });
  it("Clicking on Add to basket button adds item to basket", () =>
    cy.get(".add-to-basket").click());
  it.skip("Clicking add to basket button for a second time takes customer to basket", () => {
    cy.get(".add-to-basket").click();
    cy.url().should("include", "/basket");
    cy.get("h1").contains("Basket");
  });

  //test subtitle

  //test left description

  //test right description

  //test images?

  //test add to basket button adds to basket

  //test add to basket button with item in the basket takes you to basket
});
