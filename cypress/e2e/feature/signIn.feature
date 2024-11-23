Feature: Validate SignIn Module
# Scenario 1: User signs in with valid credentials

  Scenario: Verify sign-in attempt with an valid credentials
    Given I am on the "Sign In" page
    When I enter valid credentials
    And I click the "Sign In" button
    Then I should be successfully signed in
# Scenario 2: User signs in with invalid credentials

  Scenario: Verify sign-in attempt with an invalid email or incorrect password
    Given I am on the "Sign In" page
    When I enter an invalid email or incorrect password
    And I click the "Sign In" button
    Then I should see an error message
# Scenario 3: User signs in with unregistered email

  Scenario: Verify sign-in attempt with an unregistered email and a random password
    Given I am on the "Sign In" page
    When I enter an unregistered email and a random password
    And I click the "Sign In" button
    Then I should see an error message
