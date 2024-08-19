import { Key } from "webdriverio";
import pages from "../po/pages/index.js";
import UserNameComponent from "../po/components/login_form/userName.component.js";
import PasswordComponent from "../po/components/login_form/password.component.js";
import LoginComponent from "../po/components/login_form/login.component.js";
import ErrorMessageComponent from "../po/components/login_form/errorMessage.component.js";
import HeaderComponent from "../po/components/inventory/header.component.js";
const username = new UserNameComponent()
const password = new PasswordComponent()
const login = new LoginComponent()
const error = new ErrorMessageComponent()
const header = new HeaderComponent()

describe("Login suite", () => {
  beforeEach(async () => {
    await pages("login").open();
  });
  it("1 Login with empty credentials", async () => {
    //Type any credentials into "Username" and "Password" fields.
    await username.rootEl.setValue("some text");
    await password.rootEl.setValue("some pass");
    //Clear the inputs.
    await username.cleanEl()
    await password.cleanEl()
    //Hit the "Login" button.
    await login.rootEl.click();
    //Check the error messages: "Username is required".
    const message = await error.rootEl.getText();
    expect(message).toContain("Epic sadface: Username is required");
  });
  it("2 Login with credentials by passing Username only", async () => {

    //Type any credentials in username.
    await username.rootEl.setValue("some text");
    // Enter password.
    await password.rootEl.setValue("some pass");
    //Clear the "Password" input.
    await password.cleanEl()

    //Hit the "Login" button.
    await login.rootEl.click();
    // Check the error messages: "Password is required".
   const message = await error.rootEl.getText()
    expect(message).toContain("Password is required")
   // expect(errorMessage).toContain("Password is required");
  });
  it("3 Login with right credentials", async () => {

    //Type credentials in username which are under Accepted username are sections.
    await username.rootEl.setValue("standard_user");
    //Enter password as secret sauce.
    await password.rootEl.setValue("secret_sauce");
    //Click on Login
    await login.rootEl.click();
    // validate the title “Swag Labs” in the dashboard.
    await expect(header.rootEl).toHaveText("Swag Labs");
    //Provide parallel execution, add logging for tests and use Data Provider to parametrize tests.
    //Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.
  });
});
