Feature: Create an Account

  Scenario: User successfully creates an account
    Given I navigate to the "Create an Account" page
    Then I should see a message below the Password field
    When I enter valid values for the following fields:
      | First Name       | John        |
      | Last Name        | Doe         |
      | Email            | john.doe@example.com |
      | Password         | P@ssword123 |
      | Confirm Password | P@ssword123 |
    And I click the "Create an Account" button
    Then the account should be successfully created