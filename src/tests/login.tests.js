import pages from "../po/pages/index.js";
import component from "../po/index.js";

describe("Login test suite", () => {
  beforeEach(async () => {
    await pages("login").open();
  });
  it("1 Login with empty credentials", async () => {
    await component("username").rootEl.setValue("some text");
    await component("password").rootEl.setValue("some pass");
    await component("username").cleanEl();
    await component("password").cleanEl();
    await component("login").rootEl.click();
    const message = await component("error").rootEl.getText();
    expect(message).toContain("Epic sadface: Username is required");
  });
  it("2 Login with credentials by passing Username only", async () => {
    await component("username").rootEl.setValue("some text");
    await component("password").rootEl.setValue("some pass");
    await component("password").cleanEl();

    await component("login").rootEl.click();
    const message = await component("error").rootEl.getText();
    expect(message).toContain("Password is required");
  });
  it("3 Login with right credentials", async () => {
    await component("username").rootEl.setValue("standard_user");
    await component("password").rootEl.setValue("secret_sauce");
    await component("login").rootEl.click();
    await expect(component("header").rootEl).toHaveText("Swag Labs");
  });
});
