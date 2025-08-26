
it('should login successfully and land on AI Project page', () => {
  cy.visit('https://evo.dev.theysaid.io');

  cy.origin('https://mystical-turtle-68-staging.authkit.app', () => {
    cy.get('input[name="email"]').type('stillfriend1996@gmail.com');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="password"]', { timeout: 10000 })
      .should('be.visible')
      .type('Test@2025', { delay: 50 });
    cy.get('button[name="intent"]').click();
  });

  //  Ensure redirect back to TheySaid
  cy.url({ timeout: 20000 }).should('include', 'evo.dev.theysaid.io');

  //  Confirm AI Project page loads
  cy.contains("AI Project", { timeout: 20000 }).should("be.visible");
});

 
    //  3. Invalid Login Scenario
  it("should show error for invalid login", () => {
    cy.visit("https://evo.dev.theysaid.io");

    cy.origin("https://mystical-turtle-68-staging.authkit.app", () => {
      cy.get('input[name="email"]').type("wronguser@test.com");
      cy.get('button[type="submit"]').click();
      cy.get('input[name="password"]').type("WrongPass123!");
      cy.get('button[name="intent"]').click();

      cy.contains("Invalid email or password", { timeout: 10000 })
        .should("be.visible");
    });
  });
