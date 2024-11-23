import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Before(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.title().should('eq','Home Page')
  });

Given("I navigate to the {string} page", (pageName) => {
  // Navigate to the Create an Account page
  if (pageName === "Create an Account") {
    cy.visit("/create-account");
  }
});

Then("I should see a message below the Password field", () => {
  // Validate the presence of a message below the Password field
  cy.get("#password-helper-text") // Replace with the actual selector for the message
    .should("be.visible")
    .and("contain", "Your password must be at least 8 characters long.");
});

When("I enter valid values for the following fields:", (dataTable) => {
  // Fill in the form fields with valid data
  dataTable.hashes().forEach((field) => {
    const { First_Name, Last_Name, Email, Password, Confirm_Password } = field;
    if (field["First Name"]) cy.get('input[name="firstName"]').type(field["First Name"]);
    if (field["Last Name"]) cy.get('input[name="lastName"]').type(field["Last Name"]);
    if (field["Email"]) cy.get('input[name="email"]').type(field["Email"]);
    if (field["Password"]) cy.get('input[name="password"]').type(field["Password"]);
    if (field["Confirm Password"]) cy.get('input[name="confirmPassword"]').type(field["Confirm Password"]);
  });
});

When("I click the {string} button", (buttonName) => {
  // Click the Create an Account button
  if (buttonName === "Create an Account") {
    cy.get('button[type="submit"]').click();
  }
});

Then("the account should be successfully created", () => {
  // Assert account creation success
  cy.url().should("include", "/account-dashboard"); // Replace with actual redirect URL
  cy.get(".success-message") // Replace with the actual selector for the success message
    .should("be.visible")
    .and("contain", "Your account has been created successfully.");
});
