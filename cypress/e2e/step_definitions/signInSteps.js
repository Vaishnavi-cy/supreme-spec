import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import signInPage from "../support/signIn";

Given('I am on the "Sign In" page', () => {
  signInPage.visit();
});

When("I enter valid credentials", () => {
  signInPage.fillLoginDetails("john.doe@example.com", "Password123");
});

And('I click the "Sign In" button', () => {
  signInPage.submitLogin();
});

Then("I should be successfully signed in", () => {
  cy.url().should(
    "eq",
    "https://magento.softwaretestingboard.com/customer/account/"
  );
  cy.findByRole("heading", { name: "My Account" }).should("be.visible");
  cy.get(".block block-dashboard-info").within(() => {
    cy.findByText("Account Information").should("be.visible");
  });
});

When("I enter an invalid email or incorrect password", () => {
  // Invalid credentials (you can change these as needed)
  signInPage.fillLoginDetails("invalid.email@example.com", "wrongPassword123");
});

And('I click the "Sign In" button', () => {
  signInPage.submitLogin();
});

Then("I should see an error message", () => {
  signInPage.getLoginErrorMessage();
});

Given('I am on the "Sign In" page', () => {
  signInPage.visit();
});

When("I enter an unregistered email and a random password", () => {
  // Unregistered email and random password
  signInPage.fillLoginDetails(
    "unregistered.email@example.com",
    "randomPassword123"
  );
});

And('I click the "Sign In" button', () => {
  signInPage.submitLogin();
});
