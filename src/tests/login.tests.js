import pagesFactory from "../po/pagesFactory.js";

describe("Login test suite", () => {
  let loginForm;
  let header;
  beforeEach(async () => {
    const loginPage = pagesFactory("login");
    loginForm = loginPage.loginForm;
    await loginPage.open();
  });

  it("UC-1 Test Login form with empty credentials", async () => {
    await loginForm.usernameField.setValue("lll");
    await loginForm.passwordField.setValue("lll");
    await loginForm.clearField(loginForm.usernameField);
    await loginForm.clearField(loginForm.passwordField);

    await loginForm.loginButton.click();
    const message = await loginForm.errorMessage.getText();
    expect(message).toContain("Epic sadface: Username is required");
  });

  it("UC-2 Test Login form by entering only the username", async () => {
    await loginForm.usernameField.setValue("lll");
    await loginForm.passwordField.setValue("lll");
    await loginForm.clearField(pagesFactory("login").loginForm.passwordField);
    //await pagesFactory("login").loginForm.passwordField.click();
    //await browser.keys([Key.Ctrl, "a"]);
    //await browser.keys([Key.Delete]);
    await loginForm.loginButton.click();
    const message = await loginForm.errorMessage.getText();
    expect(message).toContain("Epic sadface: Password is required");
  });
  before(() => {
    header = pagesFactory("inventory").header;
  });
  it("UC-3 Test Login form with correct credentials", async () => {
    await loginForm.usernameField.setValue("standard_user");
    await loginForm.passwordField.setValue("secret_sauce");
    await loginForm.loginButton.click();
    await expect(header.headerText).toHaveText("Swag Labs");
  });
});
