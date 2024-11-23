Feature: Create an Account
# Scenario 1: User successfully creates an account
  Scenario: Verify account creation with valid data
    Given I am on the "Create an Account" page
    When I enter valid details for all mandatory fields
    And I click the "Create an Account" button
    Then the account should be successfully created

# Scenario 2: User sees error when mandatory fields are blank
  Scenario: Verify account creation with missing mandatory fields
  Given I am on the "Create an Account" page
  When I leave one or more mandatory fields empty
  And I click the "Create an Account" button
  Then I should see an error message indicating the required fields

# Scenario 3: Verify account creation with invalid email format
  Scenario: User tries to create an account with an invalid email format
    Given I am on the "Create an Account" page
    When I enter an invalid email format "invalid-email"
    And I fill in other fields correctly
    And I click the "Create an Account" button
    Then I should see an error message for invalid email format

# Scenario 4:Verify Password Requirements During Account Creation 
  Scenario: Entering a password that doesn't meet the requirements
    Given I navigate to the "Create an Account" page
    When I enter a password that is too short and lacks special characters
    And I click the "Create an Account" button
    Then I should see an error message indicating the password does not meet the requirements
