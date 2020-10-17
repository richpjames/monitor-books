const dispatch = (action) =>
  cy.window().its("store").invoke("dispatch", action);

describe("Basket", () => {
  beforeEach(() =>
    cy.visit(
      "/sucess?session_id=cs_test_dLmRCxB2KLmWk5J03ZU17OOzncuSMWmeHQ6nCauM4pzulAQa86Vy92kn"
    )
  );
  it("has the heading 'Success'", () => {
    cy.get("h1").contains("Success");
  });
});
