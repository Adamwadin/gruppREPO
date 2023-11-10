describe("myButtonFunctionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("passes", () => {
    // cy.visit("http://localhost:5173");
  });

  it("should show a button", () => {
    // cy.visit("http://localhost:5173");
    cy.get("button").should("exist");
  });

  it("should have text on it", () => {
    cy.get("button").should("contain.text", "knappjäveln");
  });

  it("should create a P-tag", () => {
    cy.get("button").click();
  });
});
