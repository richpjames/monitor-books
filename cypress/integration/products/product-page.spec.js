describe("Product Page", () => {
  beforeEach(() =>
    cy
      .fixture("initialisedState")
      .then((initialisedState) => cy.visit("/books/anthology"))
  );

  it("test correct information is shown for product", () => {
    cy.url()
      .should("include", "/anthology")
      .get("h2")
      .contains("Various")
      .get("h1")
      .contains("Murmur Anthology")
      .get(".left-section")
      .contains(
        "Monitor Books is proud to present: Murmur Anthology #1. Featuring new"
      )
      .get(".right-section")
      .contains("Designed by Joe Haigh at Chaosmos")
      .percySnapshot();
  });

  it("Clicking on Add to basket button adds item to basket", () => {
    return cy
      .get(".add-to-basket")
      .click()
      .get("#header-basket-items")
      .contains("1");
  });

  //test images
});
