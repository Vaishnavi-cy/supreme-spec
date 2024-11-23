class AccountCreationPage {
  static visit() {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
  }

  static fillAccountDetails({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) {
    cy.get("#firstname").type(firstName);
    cy.get("#lastname").type(lastName);
    cy.get("#email_address").type(email);
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type(confirmPassword);
  }

  static submit() {
    cy.get('button[type="submit"]')
      .should("have.title", "Create an Account")
      .click();
  }
}

export default AccountCreationPage;
