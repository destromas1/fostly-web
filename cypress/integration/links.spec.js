describe("Menu Navigation", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("FRONTEND_URL"));
  });

  it(`can visit home page from the Menu`, () => {
    cy.get(`[data-cy=shorten-link]`).click();
    cy.url().should("include", "#/");
    cy.contains("#form", "Shorten");
  });

  it(`can visit Manage Links page from the Menu`, () => {
    cy.get("[data-cy=manage-links]").click();
    cy.url().should("include", "#/manage-urls");
    cy.contains("#links", "Manage your links");
  });
});
