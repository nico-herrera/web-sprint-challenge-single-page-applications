///

describe("Loads the page", () => {
  it("Loads the page", () => {
    cy.visit("http://localhost:3000/");
  });
});

describe("clicks pizza button", () => {
  it("clicks the pizza button", () => {
    cy.get("[data-cy=pizza-button]").click();
  });
});

describe("Enters name", () => {
  it("Types a name in the name input", () => {
    cy.get("#name").type("Nico");
  });
});

describe("Adds text to the special instructions box", () => {
  it("Types in the special instructions box", () => {
    cy.get("#specialInstructions").type("pickles");
  });
});

describe("Select multiple toppings", () => {
  it("will select mushrooms box", () => {
    cy.get("#mushrooms").check();
  });

  it("will select bell peppers box", () => {
    cy.get("#bellPeppers").check();
  });

  it("will select tofu box", () => {
    cy.get("#tofu").check();
  });
});

describe("Clicks add to order button", () => {
  it("clicks the add to order button", () => {
    cy.get("[data-cy=order-button]").click();
  });
});
