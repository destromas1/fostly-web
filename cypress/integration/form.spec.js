const UrlToShorten = "http://www.test.com";

describe("Url Shortening", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("FRONTEND_URL"));
  });

  it("can be shortened", () => {
    cy.get("[data-cy=urlToShorten").type(UrlToShorten);
    cy.get("[data-cy=submitShorten]").click();
    cy.get("[data-cy=copyToddClip]");

  });
});
