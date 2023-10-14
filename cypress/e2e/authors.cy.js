describe("Testing Authors component", function () {
  it("can open authors page", function () {
    cy.visit("")
      .get("[data-testid='navigation']")
      .trigger("mouseover")
      .get("[title='Autori']")
      .click();

    cy.contains(/autori članaka/i);
  });
});
