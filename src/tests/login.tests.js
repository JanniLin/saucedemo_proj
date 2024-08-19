import {Key} from "webdriverio";
import pages from "../po/pages/index.js";

describe("Login suite", () => {
  beforeEach(async () => {
    await pages('login').open()
    //await browser.url("https://www.saucedemo.com");
  });
  it("1 Login with empty credentials", async () => {
    const $nameInput = await $("input#user-name");
    const $passInput = await $("input#password");
    //Type any credentials into "Username" and "Password" fields.
    await $nameInput.setValue("some text");
    await $passInput.setValue("some pass");
    //Clear the inputs.
    await $nameInput.click();
    await browser.keys([Key.Ctrl, "a"]);
    await browser.keys([Key.Delete]);

    await $passInput.click();
    await browser.keys([Key.Ctrl, "a"]);
    await browser.keys([Key.Delete]);

    //Hit the "Login" button.
    await $("input#login-button").click();
    //Check the error messages: "Username is required".
    const errorMessage = await $(".error-message-container").getText();
    expect(errorMessage).toContain("Epic sadface: Username is required");
  });
  it("2 Login with credentials by passing Username only", async () => {
    const $nameInput = await $("input#user-name");
    const $passInput = await $("input#password");
    //Type any credentials in username.
    await $nameInput.setValue("some text");
    // Enter password.
    await $passInput.setValue("some pass");
    //Clear the "Password" input.
    await $passInput.click();
    await browser.keys([Key.Ctrl, "a"]);
    await browser.keys([Key.Delete]);
    //Hit the "Login" button.
    await $("input#login-button").click();
    // Check the error messages: "Password is required".
    const errorMessage = await $(".error-message-container").getText();
    expect(errorMessage).toContain("Password is required");
  });
  it("3 Login with right credentials", async () => {
    const $nameInput = await $("input#user-name");
    const $passInput = await $("input#password");
    //Type credentials in username which are under Accepted username are sections.
    await $nameInput.setValue("standard_user");
    //Enter password as secret sauce.
    await $passInput.setValue("secret_sauce");
    //Click on Login
    await $("input#login-button").click();
    // validate the title “Swag Labs” in the dashboard.
    await expect($("div.app_logo")).toHaveText("Swag Labs");
    //Provide parallel execution, add logging for tests and use Data Provider to parametrize tests.
    //Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.
  });
});
