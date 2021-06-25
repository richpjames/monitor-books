describe("Product List Page", () => {
  beforeEach(() => {
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/books/")
    );
  });

  // check the login page with fluent api, see more info here
  // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html

  it("shows all the books", () => {
    cy.get("#propositions-title")
      .contains("Propositions")
      .get("#propositions-subtitle")
      .contains("Amy McCauley")
      .get('[alt="a photo of the book propositions by Amy McCauley"]')
      .should("be.visible")
      .get("#anthology-title")
      .contains("Murmur Anthology")
      .get("#anthology-subtitle")
      .contains("Various")
      .get('[alt="a photo of the book murmur anthology #1 by Various"]')
      .should("be.visible");
  });
  it("clicking on a book takes the user to the correct page", () => {
    cy.get("#propositions-container")
      .click()
      .url()
      .should("eq", "http://localhost:8000/books/propositions");
  });
});
