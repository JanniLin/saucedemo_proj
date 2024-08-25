import BasePage from "./BasePage.js";
import LoginFormComponent from "../components/LoginFormComponent.js";

export default class LoginPage extends BasePage {
  constructor() {
    super("");
    this.loginForm = new LoginFormComponent();
  }
}
