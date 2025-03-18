describe("Header", () => {
  it("clicking logo item takes the user to the about page", () => {
    cy.visit("/books/propositions");

    cy.get(".logo-container").click();
    cy.url().should("include", "/about");
  });
  it("clicking Books Nav item takes the user to the books page", () => {
    cy.visit("/books/propositions");

    cy.contains("Books").click();
    cy.url().should("include", "/books");
  });

  it("clicking Videos Nav item takes the user to the video page", () => {
    cy.visit("/books/propositions");

    cy.contains("Occasions").click();
    cy.url().should("include", "/occasions");
  });

  it("clicking Basket Nav item takes the user to the basket page", () => {
    cy.visit("/books/propositions");

    cy.get(".basket").click();
    cy.url().should("include", "/basket");
  });
});
