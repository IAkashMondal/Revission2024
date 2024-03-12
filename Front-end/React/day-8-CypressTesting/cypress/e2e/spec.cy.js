/// <reference types="Cypress"/>
describe("Home Page of the application", () => {
  it("should go to the app url", () => {
    cy.visit("http://localhost:5173/");
  });
  it("Should render my counter componente", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h3").should("exist");
    cy.get(".increment").should("exist");
    cy.get(".decrement").should("exist");
  });
  it("Should check Incremente counter button", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h3").should("have.text", "count:0");
    cy.get(".increment").click();
    cy.get("h3").should("have.text", "count:1");
  });
  it("Should check decremente counter button", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h3").should("have.text", "count:0");
    cy.get(".decrement").click();
    cy.get("h3").should("have.text", "count:-1");
  });
  it("Should check Lable of the button Increment", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".increment").should("have.text", "+");
  });
});
