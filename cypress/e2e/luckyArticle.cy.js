describe("Testing LuckyArticle component", function () {
  it("can open page", function () {
    cy.visit("")
      .get("[alt='helm image']")
      .click()
      .click()
      .get("[data-cyid='lucky']")
      .click();
    cy.get("[data-cyid='edit']");
  });
});
