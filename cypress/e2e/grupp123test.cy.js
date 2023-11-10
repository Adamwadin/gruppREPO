describe("show Aftonbladet button", () => {
  it("passes", () => {
    cy.visit("http://localhost:5174");
  });
    it("should Show Button#Aftonbladet Button", () => {
    cy.visit("http://localhost:5174");
    cy.get("button#Aftonbladet").should("exist");
  });
});


