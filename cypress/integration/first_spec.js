describe("Slideshow", () => {
  it("check slideshow duration", () => {
    cy.visit("http://localhost:8888");

    cy.contains("monitor");
  });
});
