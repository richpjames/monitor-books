describe("Initial test", () => {
    it("check text exists", () => {
        cy.visit("http://localhost:3000");
        cy.contains("monitor");
    });
});