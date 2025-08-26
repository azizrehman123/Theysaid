/*
describe('template spec', () => {
  it('should Login to the application under test Theysaid', () => {
    // Start on evo.dev.theysaid.io
cy.visit('https://evo.dev.theysaid.io');

// When redirected to authkit.app (login flow for example)
  cy.origin('https://mystical-turtle-68-staging.authkit.app', () => {
  // Commands that should run inside the authkit domain
  /*
  cy.get('[class="rt-Text BrandedLink rt-reset"]').click()
  cy.get('input[placeholder="Your first name"]').type('Aziz')
  cy.get('input[placeholder="Your last name"]').type('Rehman')
  cy.get('input[placeholder="Your email address"]').type('stillfriend1996@gmail.com')
  cy.get('[class="rt-reset rt-BaseButton rt-Button BrandedButton ak-PrimaryButton rt-r-size-3"]').click()
  cy.get('input[placeholder="Create a password"]').type('Test@2025')
  cy.get('[class="rt-reset rt-BaseButton rt-Button BrandedButton ak-PrimaryButton rt-r-size-3"]').click()
  cy.get('input[name="orgName"]').type('My Test Organization')
  cy.get('input[name="jobTitle"]').type('Tester')
  cy.get('input[name="phone"]').type('0987654321')
  cy.contains('button', '2-99').click()
  cy.contains('button', 'Better response rates').click()
  cy.contains('button', 'Continue').click()*/






/*
  cy.get('input[name="email"]').type('stillfriend1996@gmail.com');
  cy.get('button[type="submit"]').click();
  cy.get('input[name="password"]', { timeout: 10000 })  // wait until visible
  .should('be.visible')
  .type('Test@2025', { delay: 50 });  // add small typing delay
  cy.get('button[name="intent"]').click()


  })
  // Back on evo.dev.theysaid.io
  cy.url({ timeout: 20000 }).should('include', 'evo.dev.theysaid.io');

  })
  it('should Logout from the application under test Theysaid', () => {
  cy.get('div.font-display.bg-rose-100.text-red-700', { timeout: 10000 })
  .should('be.visible')
  .click()
    cy.contains('a', 'Log out').click()


  })
})*//*
describe('Theysaid Login/Logout Flow', () => {
  
  it('should Login and Logout successfully', () => {
    // Visit main site
    cy.visit('https://evo.dev.theysaid.io');

    // Handle cross-origin login
    cy.origin('https://mystical-turtle-68-staging.authkit.app', () => {
      cy.get('input[name="email"]').type('stillfriend1996@gmail.com');
      cy.get('button[type="submit"]').click();

      cy.get('input[name="password"]', { timeout: 10000 })
        .should('be.visible')
        .type('Test@2025', { delay: 50 });

      cy.get('button[name="intent"]').click();
    });

    // ✅ Wait until redirected back to evo.dev.theysaid.io
    cy.url({ timeout: 20000 }).should('include', 'evo.dev.theysaid.io');

    // ✅ Wait until the avatar (AR div) is visible → this confirms login success
    cy.contains('div', 'AR', { timeout: 20000 })
      .should('be.visible')
      .click();

    // ✅ Click Logout
    cy.contains('a', 'Log out').click();

    // ✅ Verify logout worked (redirected back to login page)
    cy.origin('https://mystical-turtle-68-staging.authkit.app', () => {
      cy.get('input[name="email"]').should('be.visible');
    });
  });
});
*/

describe("Theysaid Automation Demo", () => {
  
  // ✅ 1. Successful Login
  it("should Login to Theysaid with valid credentials", () => {
    cy.visit("https://evo.dev.theysaid.io");

    cy.origin("https://mystical-turtle-68-staging.authkit.app", () => {
      cy.get('input[name="email"]').type("stillfriend1996@gmail.com");
      cy.get('button[type="submit"]').click();
      cy.get('input[name="password"]', { timeout: 10000 })
        .should("be.visible")
        .type("Test@2025", { delay: 50 });
      cy.get('button[name="intent"]').click();
    });

    // Back on evo.dev.theysaid.io
    cy.url({ timeout: 20000 }).should("include", "evo.dev.theysaid.io");
  });

  // ✅ 2. Dashboard Validation
  it("should display user initials (AR) on dashboard", () => {
    cy.get("div.font-display.bg-rose-100.text-red-700")
      .should("be.visible")
      .and("contain.text", "AR");
  });

  // ✅ 3. Invalid Login Scenario
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

  // ✅ 4. Navigation Example (Profile or Menu)
  it("should navigate to profile/settings page", () => {
    cy.get("div.font-display.bg-rose-100.text-red-700").click();
    cy.contains("a", "Profile").click();
    cy.url().should("include", "/profile");
    cy.contains("h1", "Profile").should("be.visible"); // adjust header text if different
  });

  // ✅ 5. Logout
  it("should Logout from Theysaid", () => {
    cy.get("div.font-display.bg-rose-100.text-red-700").click();
    cy.contains("a", "Log out").click();
    cy.origin("https://mystical-turtle-68-staging.authkit.app", () => {
      cy.contains("button", "Log in").should("be.visible");
    });
  });
});
