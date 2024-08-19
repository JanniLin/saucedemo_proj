import UserNameComponent from "../po/components/login_form/userName.component.js";
import PasswordComponent from "../po/components/login_form/password.component.js";
import LoginComponent from "../po/components/login_form/login.component.js";
import ErrorMessageComponent from "../po/components/login_form/errorMessage.component.js";
import HeaderComponent from "../po/components/inventory/header.component.js";

/**
 *
 * @param name {'username' / 'password' / 'login' / 'error' / 'header'}
 * @returns {UserNameComponent / PasswordComponent / LoginComponent / HeaderComponent}
 */
export default function component(name) {
  const items = {
    username: new UserNameComponent(),
    password: new PasswordComponent(),
    login: new LoginComponent(),
    error: new ErrorMessageComponent(),
    header: new HeaderComponent()
  };
  return items[name.toLowerCase()];
}
