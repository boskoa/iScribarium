describe("Testing HomePage component", () => {
  beforeEach(function () {
    cy.visit("");
  });

  it("can be opened", function () {
    cy.contains(/enciklopedija/i);
  });

  describe("Login", function () {
    beforeEach(function () {
      cy.get("[alt='user avatar']")
        .parent()
        .click()
        .contains("prijava")
        .click();
    });

    it("can log in", function () {
      cy.get("[name='username']").type("jorgovanka");
      cy.get("[name='password']").type("lozinka");
      cy.contains(/prijava/i).click();
      cy.get("[alt='user avatar']").parent().click().contains("profil");
    });

    it("incorrect login fails", function () {
      cy.get("[name='username']").type("jorgovanka");
      cy.get("[name='password']").type("vozinka");
      cy.contains(/prijava/i).click();
      cy.contains("401");
      cy.should("not.contain", /enciklopedija/i);
    });
  });
});
