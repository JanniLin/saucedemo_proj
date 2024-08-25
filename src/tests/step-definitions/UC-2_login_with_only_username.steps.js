const { Given, When, Then } = require("@cucumber/cucumber");

Given("I am on the login page", async () => {
  // Страница уже открыта в хуке
});

When("I enter {string} in the username field", async (username) => {
  await loginForm.usernameField.setValue(username);
});

When("I enter {string} in the password field", async (password) => {
  await loginForm.passwordField.setValue(password);
});

When("I clear the password field", async () => {
  await loginForm.clearField(loginForm.passwordField);
});

When("I click the login button", async () => {
  await loginForm.loginButton.click();
});

Then("I should see the error message {string}", async (expectedMessage) => {
  const message = await loginForm.errorMessage.getText();
  expect(message).toContain(expectedMessage);
});
