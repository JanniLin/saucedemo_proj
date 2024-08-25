Feature: Login functionality

  Scenario Outline: UC-1 Test Login form with empty credentials
    Given I am on the login page
    When I enter "<username>" in the username field
    And I enter "<password>" in the password field
    And I clear the username field
    And I clear the password field
    And I click the login button
    Then I should see the error message "Epic sadface: Username is required"

    Examples:
      | username   | password  |
      | some_name  | some_pass |

  Scenario Outline: UC-2 Test Login form by entering only the username
    Given I am on the login page
    When I enter "<username>" in the username field
    And I enter "<password>" in the password field
    And I clear the password field
    And I click the login button
    Then I should see the error message "Epic sadface: Password is required"

    Examples:
      | username   | password  |
      | some_name  | some_pass |

  Scenario Outline: UC-3 Test Login form with correct credentials
    Given I am on the login page
    When I enter "<username>" in the username field
    And I enter "<password>" in the password field
    And I click the login button
    Then I should see the header "Swag Labs"

    Examples:
      | username      | password      |
      | standard_user | secret_sauce  |
