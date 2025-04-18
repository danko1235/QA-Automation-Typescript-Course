Feature: Feelia Web Application Testing

  Background:
    Given the user is authenticated

  Scenario: Verify user can navigate to Order History page
    When the user navigates to Order History page
    Then the user should see the Order History page
    And the Order History page should display orders

  Scenario: Verify user can open order details
    When the user navigates to Order History page
    And the user opens the first order details
    Then the order details should be displayed

  Scenario: Verify navigation menu functionality
    When the user clicks on the Orders menu item
    Then the user should be redirected to the Orders page
    When the user clicks on the Special Orders menu item
    Then the user should be redirected to the Special Orders page
    When the user clicks on the FAQs menu item
    Then the user should be redirected to the FAQs page
