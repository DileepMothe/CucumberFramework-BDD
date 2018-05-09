Feature: Verify Facebook Login

Keywords Summary : This Test will verify login related scenarios to facebook.com

Scenario: Login with valid credentials
Given I visit the facebook site
When i enter username as "USERNAME" and password as "PASSWORD"
And I click on login button
Then login should be successful
 