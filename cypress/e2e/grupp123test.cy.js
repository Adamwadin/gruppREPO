describe("show Marcus Button", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
  });

  it("should show marcus button#marcusButton", () => {
    cy.visit("http://localhost:5173");
    cy.get("button#marcusButton").should("exist");
  });

});
