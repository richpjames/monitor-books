describe("Slideshow", () => {
  beforeEach(() =>
    cy.fixture("initialisedState").then((initialisedState) =>
      cy.visit("/", {
        onBeforeLoad: (win) => {
          win.initialState = initialisedState;
        },
      })
    )
  );
  it("When a user navigates to the root for the first time the slideshow should show", () => {
    cy.get('[alt="Monitor Books Logo"]');
  });
  it(
    "When a user naviates to any url other than root the slideshow should not show"
  );
  it(
    "When a user navigates to the root for the second time in a session the slideshow should not show"
  );
});
