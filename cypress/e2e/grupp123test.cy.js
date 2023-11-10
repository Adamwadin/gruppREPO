describe("show adams button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("passes", () => {
    //cy.visit("http://localhost:5173");
  });

  it("should Show Adams Button", () => {
    cy.get("button#adamsButton").should("exist");
  });
  it("should Show text hejsan", () => {
    cy.get("p#text").should("contain.text", "hejsan");
  });
  it("should Show Adams Button", () => {
    cy.get("button#adamsButton").should("contain.text", "knappjäveln");
  });
});
