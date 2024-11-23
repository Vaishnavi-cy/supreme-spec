import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AccountCreationPage from "../support/createAccount";

Given('I am on the "Create an Account" page', () => {
  AccountCreationPage.visit();
  cy.title().should("include", "Create New Customer Account");
});

When("I enter valid details for all mandatory fields", () => {
  AccountCreationPage.fillAccountDetails({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "Password123",
    confirmPassword: "Password123",
  });
});

And('I click the "Create an Account" button', () => {
  AccountCreationPage.submit();
});

Then("the account should be successfully created", () => {
  // Verify that the account was successfully created
  // Ensure the user is redirected to the account page
  cy.url().should("include", "/customer/account");
  cy.findByText("Thank you for registering with Main Website Store.").should(
    "be.visible"
  );
  cy.findByRole("heading", { name: "My Account" }).should("be.visible");
  cy.get(".block block-dashboard-info").within(() => {
    cy.findByText("Account Information").should("be.visible");
  });
});

When("I leave one or more mandatory fields empty", () => {
  cy.get("#firstname").type("John"); // First Name
  cy.get("#lastname").type("Doe"); // Last Name
});

Then("I should see an error message indicating the required fields", () => {
  // Verify that the error message is shown for the missing fields
  cy.get("#email-error").should("contain", "This is a required field");
  cy.get("#password-error").should("contain", "This is a required field");
  cy.get("#password-confirmation-error").should(
    "contain",
    "This is a required field"
  );
});

When('I enter an invalid email format "invalid-email"', () => {
  AccountCreationPage.fillAccountDetails({
    firstName: "John",
    lastName: "Doe",
    email: "abc#com",
    password: "Password123",
    confirmPassword: "Password123",
  });
});

Then("I should see an error message for invalid email format", () => {
  // Validate the error message for email
  cy.get("#email-error")
    .should("be.visible")
    .and("contain", "Please enter a valid email address");
});

When(
  "I enter a password that is too short and lacks special characters",
  () => {
    // Entering an invalid password (too short and no special characters)
    cy.get("input#password").type("short1");
  }
);

Then(
  "I should see an error message indicating the password does not meet the requirements",
  () => {
    // Verifying the error message appears for an invalid password
    cy.get("#password-error").should(
      "contain",
      "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored."
    );
    cy.get(".password-weak").should("be.visible");
  }
);
