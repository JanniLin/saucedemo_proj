import BaseComponent from "../common/base.component.js";
import { Key } from "webdriverio";

export default class LoginFormComponent extends BaseComponent {
  constructor() {
    super("div.login-box");
  }

  get usernameField() {
    return this.rootEl.$("input#user-name");
  }

  get passwordField() {
    return this.rootEl.$("input#password");
  }
  async clearField(field) {
    await field.click();
    await browser.keys([Key.Ctrl, "a"]);
    await browser.keys([Key.Delete]);
  }

  get loginButton() {
    return this.rootEl.$("input#login-button");
  }

  get errorMessage() {
    return this.rootEl.$(".error-message-container");
  }
}
