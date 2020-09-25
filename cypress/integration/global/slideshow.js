describe("Slideshow", () => {
  it("check slideshow duration", () => {
    cy.visit("http://localhost:8888");
    cy.contains("Propositions");

    cy.contains("monitor");
    cy.url().should("include", "/propositions");
    cy.get("h1").contains("Amy");
  });
});
