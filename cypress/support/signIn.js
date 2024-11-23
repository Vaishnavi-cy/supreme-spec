class SignInPage {
  visit() {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
  }

  fillLoginDetails(email, password) {
    cy.get(".block block-customer-login").within(() => {
      cy.get("#email").type(email);
      cy.get("#pass").type(password);
    });
  }

  submitLogin() {
    cy.findByRole("button", { name: "Sign In" }).click();
  }

  getLoginErrorMessage() {
    cy.findByRole("alert")
      .should("be.visible")
      .within(() => {
        cy.findByText(
          "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
        ),
          should("be.visible").and("have.css", "color", "rgb(224, 43, 39)");
      });
  }
}

export default SignInPage;
