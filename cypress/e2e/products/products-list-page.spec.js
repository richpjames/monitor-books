describe("Product List Page", () => {
  beforeEach(() => {
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/books/")
    );
  });

  it("shows some of the books", () => {
    cy.get("#propositions-title")
      .contains("Propositions")
      .get("#propositions-subtitle")
      .contains("Amy McCauley")
      .get('[alt="a photo of the book Propositions by Amy McCauley"]')
      .should("be.visible")
      .get("#anthology-title")
      .contains("Murmur Anthology")
      .get("#anthology-subtitle")
      .contains("Various")
      .get('[alt="a photo of the book Murmur Anthology #1 by Various"]')
      .should("be.visible")
      .percySnapshot();
  });

  it("clicking on a book takes the user to the correct page", () => {
    cy.wait(5000)
      .get("#propositions-container")
      .click()
      .url()
      .should("contain", `${Cypress.config().baseUrl}/books/propositions`);
  });
});
