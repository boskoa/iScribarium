describe("Testing Categories component", function () {
  it("can open categories page", function () {
    cy.visit("")
      .get("[data-testid='navigation']")
      .trigger("mouseover")
      .get("[title='Kategorije']")
      .click();

    cy.contains(/kategorije/i);
  });
});
