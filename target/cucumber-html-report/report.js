$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/login/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to application",
  "description": "",
  "id": "login-to-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4150637034,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login to application",
  "description": "",
  "id": "login-to-application;login-to-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter email address as \"test902@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Login is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToAutomationPractices.navigate_to_application()"
});
formatter.result({
  "duration": 6818233992,
  "status": "passed"
});
formatter.match({
  "location": "LoginToAutomationPractices.user_click_on_sign_in_link()"
});
formatter.result({
  "duration": 2725574084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test902@gmail.com",
      "offset": 24
    }
  ],
  "location": "LoginToAutomationPractices.enter_email_address_as(String)"
});
formatter.result({
  "duration": 172460246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 19
    }
  ],
  "location": "LoginToAutomationPractices.enter_password_as(String)"
});
formatter.result({
  "duration": 118072851,
  "status": "passed"
});
formatter.match({
  "location": "LoginToAutomationPractices.click_on_sign_in_button()"
});
formatter.result({
  "duration": 2830434976,
  "status": "passed"
});
formatter.match({
  "location": "LoginToAutomationPractices.login_is_successful()"
});
formatter.result({
  "duration": 49501868,
  "status": "passed"
});
formatter.after({
  "duration": 686523237,
  "status": "passed"
});
});