const dispatch = (action) =>
  cy.window().its("store").invoke("dispatch", action);

describe("Basket", () => {
  beforeEach(() => cy.visit("/success"));
  it("has the heading 'Success'", () => {
    cy.get("h1").contains("Success");
  });
});
